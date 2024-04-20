package com.userservice.entity;


import org.junit.jupiter.api.Test;
import java.util.Date;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

 class UserTest {
    @Test
    void givenEmptyConstructor_whenCreateUser_thenUserIsNotNull() {
        User user = new User();
        assertNotNull(user);
    }
    @Test
    void givenArgsConstructor_whenCreateUserWithParameters_thenUserFieldsAreSet() {
        Date dateOfBirth = new Date(1990, 5, 15);
        Address address = new Address(1, "123 Main St", "CityVille", "12345");
        User user = new User(1, "John", "Doe", dateOfBirth, "johndoe@example.com",
                "password123", "customer", "USA", "1234567890",address);

        assertEquals(1, user.getId());
        assertEquals("John", user.getFirstName());
        assertEquals("Doe", user.getLastName());
        assertEquals(dateOfBirth, user.getDateOfBirth());
        assertEquals("johndoe@example.com", user.getEmail());
        assertEquals("password123", user.getPassword());
        assertEquals("customer", user.getAccountType());
        assertEquals("USA", user.getCountry());
        assertEquals("1234567890", user.getPhoneNumber());
    }

    @Test
    void givenUserId_whenSetId_thenUserIdIsSet() {
        User user = new User();
        user.setId(1);
        assertEquals(1, user.getId());
    }

    @Test
    void givenUserFirstName_whenSetFirstName_thenFirstNameIsSet() {
        User user = new User();
        user.setFirstName("Alice");
        assertEquals("Alice", user.getFirstName());
    }

    @Test
    void givenUserLastName_whenSetLastName_thenLastNameIsSet() {
        User user = new User();
        user.setLastName("Smith");
        assertEquals("Smith", user.getLastName());
    }

    @Test
    void givenUserDateOfBirth_whenSetDateOfBirth_thenDateOfBirthIsSet() {
        User user = new User();
        Date dateOfBirth = new Date(1995, 8, 20);
        user.setDateOfBirth(dateOfBirth);
        assertEquals(dateOfBirth, user.getDateOfBirth());
    }

    @Test
    void givenUserEmail_whenSetEmail_thenEmailIsSet() {
        User user = new User();
        user.setEmail("alice@example.com");
        assertEquals("alice@example.com", user.getEmail());
    }

    @Test
    void givenUserPassword_whenSetPassword_thenPasswordIsSet() {
        User user = new User();
        user.setPassword("newPassword123");
        assertEquals("newPassword123", user.getPassword());
    }

    @Test
    void givenUserAccountType_whenSetAccountType_thenAccountTypeIsSet() {
        User user = new User();
        user.setAccountType("admin");
        assertEquals("admin", user.getAccountType());
    }

    @Test
    void givenUserCountry_whenSetCountry_thenCountryIsSet() {
        User user = new User();
        user.setCountry("Canada");
        assertEquals("Canada", user.getCountry());
    }

    @Test
    void givenUserPhoneNumber_whenSetPhoneNumber_thenPhoneNumberIsSet() {
        User user = new User();
        user.setPhoneNumber("9876543210");
        assertEquals("9876543210", user.getPhoneNumber());
    }
    @Test
    void givenUserAddress_whenSetUserAddress_thenAddressIsSet() {
        User user = new User();
        Address address = new Address(1, "123 Main St", "CityVille", "12345");
        user.setAddress(address);
        assertEquals(address, user.getAddress());
    }
}
