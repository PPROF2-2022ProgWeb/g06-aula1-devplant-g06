package com.devplant.devplant.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface IPersonaRepository {

    @Repository
    public interface IPersonaRepository extends JpaRepository<Persona, long>{

    }

}
