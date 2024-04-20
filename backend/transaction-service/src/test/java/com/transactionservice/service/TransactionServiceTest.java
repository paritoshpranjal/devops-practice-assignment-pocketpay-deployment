package com.transactionservice.service;

import com.transactionservice.dto.RecipientDTO;
import com.transactionservice.dto.TransactionDTO;
import com.transactionservice.entity.AccountType;
import com.transactionservice.entity.Transaction;
import com.transactionservice.entity.TransactionStatus;
import com.transactionservice.exception.RecordNotFoundException;
import com.transactionservice.repository.TransactionRepository;
import com.transactionservice.service.impl.TransactionServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

import java.util.*;

class TransactionServiceTest {

    @Mock
    private TransactionRepository transactionRepository;

    @InjectMocks
    private TransactionServiceImpl transactionService;

    @BeforeEach
    public void setup() throws Exception {
        MockitoAnnotations.initMocks(this);
    }



    @Test
    void givenTransactionRequestBody_thenCreateTransaction() {
        RecipientDTO recipientDTO = RecipientDTO.builder().id(1).ifsc("ifsc")
                .accountNo("12322").accountType(AccountType.CHECKING).email("email").firstName("pavan").lastName("kumar").build();
        TransactionDTO transactionDTO = TransactionDTO.builder().id(1).senderCurrency("EUR")
                .receiverCurrency("GBP").date(new Date()).receiverAmount(114.00).senderAmount(100.00).purpose("purpose")
                .paymentId(1).status(TransactionStatus.SENDING).transferNumber("1232").recipient(recipientDTO).build();
        Transaction transaction = Transaction.builder().id(1).build();
        when(transactionRepository.save(any(Transaction.class))).thenReturn(transaction);
        TransactionDTO dto = transactionService.createTransaction(1,transactionDTO);
        assertEquals(transaction.getId(), dto.getId());
    }

    @Test
    void givenUserId_thenReturnUserTransactions() {
        when(transactionRepository.findByUserId(anyInt())).thenReturn(Collections.singletonList(Transaction.builder().id(1).build()));
        List<TransactionDTO> transactionDTOList = transactionService.getTransactionsByUserId(1);
        assertEquals(1, transactionDTOList.size());
    }

    @Test
    void givenTransactionIdAndRequestBody_thenReturnUpdatedTransaction() {
        when(transactionRepository.findById(anyInt())).thenReturn(Optional.ofNullable(Transaction.builder().id(1).build()));
        when(transactionRepository.save(any(Transaction.class))).thenReturn(Transaction.builder().id(1).build());
        TransactionDTO updatedTransaction = transactionService.updateTransaction(1, TransactionDTO.builder().id(1).status(TransactionStatus.CANCELLED).build());
        assertEquals(1, updatedTransaction.getId());
    }

    @Test
    void givenTransactionIdAndRequestBody_whenTransactionIdInvalid_thenThrowRecordNotFoundException() {
        TransactionDTO transactionDTO=TransactionDTO.builder().id(1).build();
        when(transactionRepository.findById(anyInt())).thenReturn(Optional.empty());
        assertThrows(RecordNotFoundException.class, () -> transactionService.updateTransaction(1, transactionDTO));
    }
}
