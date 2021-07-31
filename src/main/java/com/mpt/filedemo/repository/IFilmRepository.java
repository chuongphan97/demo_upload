package com.mpt.filedemo.repository;

import com.mpt.filedemo.model.Film;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IFilmRepository extends JpaRepository<Film, Long> {
}
