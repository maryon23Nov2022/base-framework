package com.zhuqi.config;

import com.baomidou.mybatisplus.extension.spring.MybatisSqlSessionFactoryBean;
import org.mybatis.spring.mapper.MapperScannerConfigurer;
import org.springframework.context.annotation.Bean;
import javax.sql.DataSource;

public class MybatisPlusConfig{

    @Bean
    public MybatisSqlSessionFactoryBean mssfb(DataSource dataSource){
        MybatisSqlSessionFactoryBean mssfb = new MybatisSqlSessionFactoryBean();
        mssfb.setTypeAliasesPackage("com.zhuqi.pojo");
        mssfb.setDataSource(dataSource);
        return mssfb;
    }

    @Bean
    public MapperScannerConfigurer mapperScannerConfigurer(){
        MapperScannerConfigurer msc = new MapperScannerConfigurer();
        msc.setBasePackage("com.zhuqi.mapper");
        return msc;
    }
}