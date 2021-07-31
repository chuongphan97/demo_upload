package com.mpt.filedemo.service.Impl;

import com.mpt.filedemo.model.Film;
import com.mpt.filedemo.repository.IFilmRepository;
import com.mpt.filedemo.service.IFilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class FilmServiceImpl implements IFilmService {
    @Autowired
    IFilmRepository filmRepository;


    @Override
    public Iterable<Film> findAll() {
        return filmRepository.findAll();
    }

    @Override
    public Optional<Film> findById(Long id) {
        return filmRepository.findById(id);
    }

    @Override
    public Film save(Film film) {
        return filmRepository.save(film);
    }

    @Override
    public void remove(Long id) {
        filmRepository.deleteById(id);
    }
}
