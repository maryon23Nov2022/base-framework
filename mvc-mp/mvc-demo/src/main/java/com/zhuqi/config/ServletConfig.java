package com.zhuqi.config;

import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.filter.CharacterEncodingFilter;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;
import org.springframework.web.servlet.support.AbstractDispatcherServletInitializer;

import javax.servlet.Filter;

//Define a servlet container startup class and load spring configuration in it
public class ServletConfig extends AbstractAnnotationConfigDispatcherServletInitializer{

    //load Spring container configuration
    @Override
    protected Class<?>[] getRootConfigClasses() {
        return new Class[]{SpringConfig.class};
    }

    //load Spring MVC configuration
    @Override
    protected Class<?>[] getServletConfigClasses() {
        return new Class[]{SpringMvcConfig.class};
    }

    //configure which request should be processed by Spring MVC
    @Override
    protected String[] getServletMappings() {
        return new String[]{"/"};
    }

//    @Override
//    protected Filter[] getServletFilters() {
//        CharacterEncodingFilter filter = new CharacterEncodingFilter();
//        filter.setEncoding("UTF-8");
//        return new Filter[]{filter};
//    }
}

//public class ServletConfig extends AbstractDispatcherServletInitializer{
//    @Override
//    protected WebApplicationContext createRootApplicationContext(){
//        AnnotationConfigWebApplicationContext ctx = new AnnotationConfigWebApplicationContext();
//        ctx.register(SpringConfig.class);
//        return ctx;
//    }
//    @Override
//    protected WebApplicationContext createServletApplicationContext(){
//        AnnotationConfigWebApplicationContext ctx = new AnnotationConfigWebApplicationContext();
//        ctx.register(SpringMvcConfig.class);
//        return ctx;
//    }
//    @Override
//    protected String[] getServletMappings(){
//        return new String[]{"/"};
//    }
//
//}