package com.devplantbackend.devplantbackend.services;


import com.devplantbackend.devplantbackend.entity.Usuario;
import com.devplantbackend.devplantbackend.entity.UsuarioRol;

import java.util.Set;

public interface UsuarioService {

    public Usuario guardarUsuario(Usuario usuario, Set<UsuarioRol> usuarioRoles) throws Exception;

    public Usuario obtenerUsuario(String username);

    public void eliminarUsuario(Long usuarioId);

}
