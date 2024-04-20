package com.apigateway.filter;


import com.apigateway.exception.AccessDeniedException;
import com.apigateway.exception.ApiErrorResponse;
import com.apigateway.payload.TokenDto;
import com.apigateway.payload.UserResponse;
import com.apigateway.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.cloud.netflix.eureka.EurekaDiscoveryClient;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ServerWebExchange;

@Component
public class AuthenticationFilter extends AbstractGatewayFilterFactory<AuthenticationFilter.Config> {

    @Autowired
    private RouteValidator validator;

    @Autowired
    private RestTemplate template;
//    @Autowired
//    ServerHttpRequest request = null;
    @Autowired
    private EurekaDiscoveryClient discoveryClient;


    public AuthenticationFilter() {
        super(Config.class);
    }


    @Override
    public GatewayFilter apply(Config config) {
        return ((exchange, chain) -> {
            if (validator.isSecured.test(exchange.getRequest())) {
                //header contains token or not
                if (!exchange.getRequest().getHeaders().containsKey(HttpHeaders.AUTHORIZATION)) {
                    throw new AccessDeniedException("missing authorization header");
                }

                String authHeader = exchange.getRequest().getHeaders().get(HttpHeaders.AUTHORIZATION).get(0);
                if (authHeader != null && authHeader.startsWith("Bearer ")) {
                    authHeader = authHeader.substring(7);
                }
                try {
                    ServerWebExchange newExchange=validateTokenAndAddHeader(exchange,authHeader);
                    return chain.filter(newExchange);


                } catch (Exception e) {
                    System.out.println("invalid access...!"+e.getMessage());

                    throw new AccessDeniedException("un authorized access to application");
                }
            }
            return chain.filter(exchange);
        });

    }

    public static class Config {

    }
    public String getUserServiceUrl() {
        return discoveryClient.getInstances("USER-SERVICE")
                .stream()
                .findFirst()
                .map(serviceInstance -> serviceInstance.getUri().toString())
                .orElseThrow(() -> new RuntimeException("User service not available"));
    }

    public ServerWebExchange validateTokenAndAddHeader(ServerWebExchange exchange,String authHeader){
        template.postForObject(
                getUserServiceUrl() + "/user/validateToken",
                new TokenDto(authHeader),
                ApiErrorResponse.class
        );
        String userEmailId = new JwtService().getEmailFromJwtToken(authHeader);
        UserResponse userResponse = template.getForObject(  getUserServiceUrl()+"/user?email=" + userEmailId, UserResponse.class);
        ServerHttpRequest request = exchange.getRequest()
                .mutate()
                .header("user_id", String.valueOf(userResponse.getId()))
                .build();
        return exchange.mutate().request(request).build();

    }

}