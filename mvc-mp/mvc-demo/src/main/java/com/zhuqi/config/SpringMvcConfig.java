package com.zhuqi.config;

import com.zhuqi.controller.interceptor.Interceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//Create Config file and load corresponding bean
@Configuration
@ComponentScan(value = {"com.zhuqi.controller"})
@EnableWebMvc
public class SpringMvcConfig implements WebMvcConfigurer{
    @Autowired
    private Interceptor interceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry){
        System.out.printf("interceptor added\n");
        registry.addInterceptor(interceptor).addPathPatterns("/*");
    }
}