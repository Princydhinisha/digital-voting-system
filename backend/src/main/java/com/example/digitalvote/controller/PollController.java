package com.example.digitalvote.controller;

import com.example.digitalvote.model.Poll;
import com.example.digitalvote.repository.PollRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/api/polls")
@CrossOrigin(origins = "http://localhost:3000")
public class PollController {

    private final PollRepository pollRepository;

    public PollController(PollRepository pollRepository) {
        this.pollRepository = pollRepository;
    }

    @PostMapping("/create")
    public ResponseEntity<?> createPoll(@RequestBody Poll poll) {
        Poll savedPoll = pollRepository.save(poll);
        return ResponseEntity.ok(savedPoll);
    }
    @GetMapping("/all")
public ResponseEntity<?> getAllPolls() {
    return ResponseEntity.ok(pollRepository.findAll());
}
 @GetMapping("/{id}")
public ResponseEntity<?> getPollById(@PathVariable Long id) {
    return pollRepository.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
}
@PostMapping("/vote")
public ResponseEntity<?> vote(@RequestBody List<Long> optionIds) {

    optionIds.forEach(id -> {
        pollRepository.findAll().forEach(poll -> {
            poll.getOptions().forEach(option -> {
                if (option.getId().equals(id)) {
                    option.setVoteCount(option.getVoteCount() + 1);
                }
            });
        });
    });

    pollRepository.flush();
    return ResponseEntity.ok("Vote recorded");
}

}

