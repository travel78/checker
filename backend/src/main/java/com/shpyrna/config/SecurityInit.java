package com.shpyrna.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.context.AbstractSecurityWebApplicationInitializer;

/**
 * Created by Юра on 19.07.2017.
 */
@EnableWebSecurity
@Configuration
public class SecurityInit extends AbstractSecurityWebApplicationInitializer {
}
