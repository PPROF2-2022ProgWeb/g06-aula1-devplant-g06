package com.devplantbackend.devplantbackend;

import com.devplantbackend.devplantbackend.entity.Rol;
import com.devplantbackend.devplantbackend.entity.Usuario;
import com.devplantbackend.devplantbackend.entity.UsuarioRol;
import com.devplantbackend.devplantbackend.excepciones.UsuarioNotFoundException;
import com.devplantbackend.devplantbackend.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class DevplantBackendApplication  implements CommandLineRunner {

	@Autowired
	private UsuarioService usuarioService;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	public static void main(String[] args) {
		SpringApplication.run(DevplantBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception{
/*
		try{
			 Usuario usuario = new Usuario();

			usuario.setNombre("Belen");
			usuario.setApellido("Re");
			usuario.setUsername("Belu");
			usuario.setPassword(bCryptPasswordEncoder.encode( "12345"));
			usuario.setEmail("belen.re.gareis@gmail.com");
			usuario.setTelefono("3584113711");
			usuario.setPerfil("foto.png");

			Rol rol = new Rol();
			rol.setRolId(1L);
			rol.setRolNombre("ADMIN");

			Set<UsuarioRol> usuarioRoles = new HashSet<>();
			UsuarioRol usuarioRol = new UsuarioRol();
			usuarioRol.setRol(rol);
			usuarioRol.setUsuario(usuario);
			usuarioRoles.add(usuarioRol);

			Usuario usuarioGuardado = usuarioService.guardarUsuario(usuario, usuarioRoles);
			System.out.println(usuarioGuardado.getUsername());

		}catch(UsuarioNotFoundException exception){
			exception.printStackTrace();
		}

*/


	}

}
