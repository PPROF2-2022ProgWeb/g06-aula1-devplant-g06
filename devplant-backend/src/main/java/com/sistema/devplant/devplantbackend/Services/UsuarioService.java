package com.sistema.devplant.devplantbackend.Services;


import com.sistema.devplant.devplantbackend.entity.Usuario;
import com.sistema.devplant.devplantbackend.entity.UsuarioRol;

import java.util.Set;

public interface UsuarioService {

    public Usuario guardarUsuario(Usuario usuario, Set<UsuarioRol> usuarioRoles) throws Exception;

}
