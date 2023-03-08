package com.zhuqi.service.file;

import com.zhuqi.controller.Result;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

public interface ReceiveService{
    Result receiveFile(MultipartFile file) throws IOException;
}
