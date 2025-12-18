package com.example.digitalvote.repository;

import com.example.digitalvote.model.Poll;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PollRepository extends JpaRepository<Poll, Long> {
}

