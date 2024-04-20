package com.userservice.entity;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

 class AddressTest {
    @Test
    void givenEmptyConstructor_whenCreateAddress_thenAddressIsNotNull() {
        Address address = new Address();
        assertNotNull(address);
    }

    @Test
    void givenArgsConstructor_whenCreateAddressWithParameters_thenAddressFieldsAreSet() {
        Address address = new Address(1, "123 Main St", "CityVille", "12345");

        assertEquals(1, address.getId());
        assertEquals("123 Main St", address.getHomeAddress());
        assertEquals("CityVille", address.getCity());
        assertEquals("12345", address.getPostalCode());
    }

    @Test
    void givenAddressId_whenSetId_thenAddressIdIsSet() {
        Address address = new Address();
        address.setId(2);
        assertEquals(2, address.getId());
    }

    @Test
    void givenAddressHomeAddress_whenSetHomeAddress_thenHomeAddressIsSet() {
        Address address = new Address();
        address.setHomeAddress("456 Elm St");
        assertEquals("456 Elm St", address.getHomeAddress());
    }

    @Test
    void givenAddressCity_whenSetCity_thenCityIsSet() {
        Address address = new Address();
        address.setCity("Townsville");
        assertEquals("Townsville", address.getCity());
    }

    @Test
    void givenAddressPostalCode_whenSetPostalCode_thenPostalCodeIsSet() {
        Address address = new Address();
        address.setPostalCode("54321");
        assertEquals("54321", address.getPostalCode());
    }
}
