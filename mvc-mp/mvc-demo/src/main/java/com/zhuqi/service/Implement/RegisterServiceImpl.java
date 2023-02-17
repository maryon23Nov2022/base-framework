package com.zhuqi.service.Implement;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.zhuqi.controller.Code;
import com.zhuqi.controller.Result;
import com.zhuqi.mapper.UserMapper;
import com.zhuqi.pojo.User;
import com.zhuqi.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegisterServiceImpl implements LoginService{
    @Autowired
    private UserMapper userMapper;

    @Override
    public Result addUser(User user) {
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("username", user.getUsername());
        Boolean flag = null == userMapper.selectOne(queryWrapper);
        String msg;
        if(flag){
            userMapper.insert(user);
            msg = "user added";
        } else msg = "username already exist.";
        return new Result(flag ? Code.OK : Code.ERR, user.getUsername(), msg);
    }
}
