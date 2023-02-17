package com.zhuqi.config;

import org.apache.ibatis.datasource.pooled.PooledDataSource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;

import javax.sql.DataSource;

public class JdbcConfig{
    @Value("${jdbc.driver}")
    private String driver;
    @Value("${jdbc.url}")
    private String url;
    @Value("${jdbc.username}")
    private String username;
    @Value("${jdbc.password}")
    private String password;

    @Bean
    public DataSource dataSource(){
        System.out.printf("driver = %s\n", driver);
        System.out.printf("url = %s\n", url);
        System.out.printf("username = %s\n", username);
        System.out.printf("password = %s\n", password);
        PooledDataSource pooledDataSource = new PooledDataSource();
        pooledDataSource.setDriver(driver);
        pooledDataSource.setUrl(url);
        pooledDataSource.setUsername(username);
        pooledDataSource.setPassword(password);
        return pooledDataSource;
    }
}
