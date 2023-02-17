package com.zhuqi.config;

import org.springframework.context.annotation.*;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;

@Configuration
@ComponentScan(value = {"com.zhuqi"},
        excludeFilters = @ComponentScan.Filter(
                type = FilterType.ANNOTATION,
                classes = {Controller.class, Configuration.class}
        )
)
@PropertySource(value = {"classpath:jdbc.properties"})
@Import(value = {JdbcConfig.class, MybatisPlusConfig.class})
public class SpringConfig{
}