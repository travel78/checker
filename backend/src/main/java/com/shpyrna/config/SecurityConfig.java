package com.shpyrna.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

/**
 * Created by Юра on 19.07.2017.
 */

@Configuration
@EnableWebSecurity
@ComponentScan("com.shpyrna.*")
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private UserDetailsService userDetailsService;
    @Autowired
    private AuthSuccessHandler authSuccessHandler;
    @Autowired
    private AuthFailureHandler authFailureHandler;
    @Autowired
    private AuthenticationEntryPoint authenticationEntryPoint;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailsService);
        provider.setPasswordEncoder(passwordEncoder());
        return provider;
    }


    @Autowired
    public void configureGlobalSecurity(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication().withUser("user").password("user").roles("USER");
        auth.inMemoryAuthentication().withUser("admin").password("admin").roles("ADMIN");

    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.headers().cacheControl();

        http.authorizeRequests()
                .antMatchers(
                        "/login",
                        "/register",
                        "/",
                        "/recipes",
                        "/"
                ).permitAll();
        http.authorizeRequests()
                .antMatchers(
                        "/ll"
                ).access("hasRole('ADMIN')");

        http.csrf()
//                .disable();
//                ;
                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());

        http.exceptionHandling()
                .authenticationEntryPoint(authenticationEntryPoint);
        http
                .formLogin()
                .permitAll()
                .loginProcessingUrl("/login")
                .usernameParameter("myusername")
                .passwordParameter("mypassword")
                .successHandler(authSuccessHandler)
                .failureHandler(authFailureHandler)
                .and()
                .logout()
                .permitAll()
//                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
//                .logoutSuccessHandler(logoutSuccessHandler)
//                .and()
//                .sessionManagement()
//                .maximumSessions(1);

            .and()
                .sessionManagement()
                .maximumSessions(1);

//        http.authorizeRequests().anyRequest().authenticated();

    }
}
