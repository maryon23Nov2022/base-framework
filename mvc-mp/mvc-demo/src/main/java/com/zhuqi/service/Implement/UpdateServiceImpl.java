package com.zhuqi.service.Implement;

import com.zhuqi.controller.Code;
import com.zhuqi.controller.Result;
import com.zhuqi.mapper.UserMapper;
import com.zhuqi.pojo.User;
import com.zhuqi.service.UpdateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UpdateServiceImpl implements UpdateService{
    @Autowired
    private UserMapper userMapper;

    @Override
    public Result updateUser(User user){
        Integer res = userMapper.updateById(user);
        String msg = res > 0 ? "success" : "failed";
        return new Result(res > 0 ? Code.OK : Code.ERR, res, msg);
    }
}
