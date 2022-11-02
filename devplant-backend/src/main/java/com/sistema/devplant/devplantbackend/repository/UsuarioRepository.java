package com.sistema.devplant.devplantbackend.repository;

import com.sistema.devplant.devplantbackend.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario,Long> {

    public Usuario findByUsername(String username);

}
