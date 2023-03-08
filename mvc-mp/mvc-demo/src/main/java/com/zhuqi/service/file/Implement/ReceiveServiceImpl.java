package com.zhuqi.service.file.Implement;

import com.zhuqi.controller.Code;
import com.zhuqi.controller.Result;
import com.zhuqi.mapper.FileMapper;
import com.zhuqi.pojo.MyFile;
import com.zhuqi.service.file.ReceiveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.Date;

@Service
public class ReceiveServiceImpl implements ReceiveService{
    @Autowired
    private FileMapper fileMapper;

    public Result receiveFile(MultipartFile originalFile) throws IOException{
        System.out.printf("%s: %s\n", "ReceiveServiceImpl", originalFile);
        String modelName = originalFile.getOriginalFilename();
        System.out.printf("%s: %s\n", "ReceiveServiceImpl", modelName);
        Integer authorId = 6;
        Long fileSize = originalFile.getSize();
        fileMapper.insert(new MyFile(null, modelName, authorId, fileSize, new Date()));
        String path = "C:\\Users\\zhuqi\\Desktop\\2022-2023-2\\basic-framework\\mvc-mp\\mvc-demo\\src";
        path += File.separator + authorId; path += File.separator + modelName.substring(0, modelName.length() - 4);
        System.out.printf("%s: %s\n", "ReceiveServiceImplement's path", path);
        File file = new File(path);
        file.mkdirs();
        file = new File(path + File.separator + modelName);
        System.out.printf("%s: %b\n", "ReceiveServiceImplement's path", file.createNewFile());

        try(
            FileOutputStream fileOutputStream = new FileOutputStream(path + File.separator + modelName);
            BufferedOutputStream bufferedOutputStream = new BufferedOutputStream(fileOutputStream);
        ){
            bufferedOutputStream.write(originalFile.getBytes());
        }

        System.out.printf("%s: %s\n", "ReceiveServiceImplement's user.home", System.getProperty("user.home"));
        return new Result(Code.OK, "file received", null);
    }
}