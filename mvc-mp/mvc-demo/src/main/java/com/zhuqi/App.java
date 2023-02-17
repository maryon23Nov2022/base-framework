package com.zhuqi;

import com.zhuqi.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Hello world!
 *
 */
public class App{
    @Autowired
    private UserMapper userMapper;

    public void login(){
        userMapper.selectById(6);

    }

    public static void main(String[] args){
        System.out.println( "Hello World!" );
    }
}
