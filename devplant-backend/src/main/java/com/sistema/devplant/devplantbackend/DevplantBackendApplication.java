package com.sistema.devplant.devplantbackend;

import com.sistema.devplant.devplantbackend.Services.UsuarioService;
import com.sistema.devplant.devplantbackend.entity.Rol;
import com.sistema.devplant.devplantbackend.entity.Usuario;
import com.sistema.devplant.devplantbackend.entity.UsuarioRol;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class DevplantBackendApplication implements CommandLineRunner {

	@Autowired
	private UsuarioService usuarioService;

	public static void main(String[] args) {

		SpringApplication.run(DevplantBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		Usuario usuario = new Usuario();
		usuario.setNombre("Manuel");
		usuario.setApellido("Canas");
		usuario.setUsername("Manuels");
		usuario.setPassword("1234");
		usuario.setEmail("manuels4641366@gmail.com");
		usuario.setTelefono("234234234");
		usuario.setPerfil("foto.png");

		Rol  rol = new Rol();
		rol.setRolId(1L);
		rol.setNombre("ADMIN");

		Set<UsuarioRol> usuarioRoles = new HashSet<>();
		UsuarioRol usuarioRol = new UsuarioRol();
		usuarioRol.setRol(rol);
		usuarioRol.setUsuario(usuario);
		usuarioRoles.add(usuarioRol);

		Usuario usuarioGuardado = usuarioService.guardarUsuario(usuario,usuarioRoles);
		System.out.println(usuarioGuardado.getUsername());

	}
}
