const fs = require('fs');
const path = require('path');

export function update_user_save(id, increment) {
        const filePath = path.join(__dirname, 'user_data.txt');
        let fileContent = fs.readFileSync(filePath, 'utf8');
        let lines = fileContent.split('\n').filter(Boolean);
        
        // 使用正则表达式进行匹配
        let regexp = new RegExp(id);
        
        // 查找匹配的行，并记住最后一个匹配行的索引
        for (let i = lines.length - 1; i >= 0; i--) {
            // 判断当前行是否匹配正则表达式
            if (regexp.test(lines[i])) {
                // 将匹配的行解析为对象
                let user = JSON.parse(lines[i]);
                // 检查 id 是否符合条件
                if (user.id === id) {
                    // 更新用户数据
                    user.save = String(Number(user.save) + increment);
                    // 更新文件内容
                    lines[i] = JSON.stringify(user);
                    break;
                }
            }
        }
    
        // 将更新后的文件内容写回文件
        fileContent = lines.join('\n');
        fs.writeFileSync(filePath, fileContent + '\n');
    }

export function update_user_coin(id, increment) {
        const filePath = path.join(__dirname, 'user_data.txt');
        let fileContent = fs.readFileSync(filePath, 'utf8');
        let lines = fileContent.split('\n').filter(Boolean);
        
        // 使用正则表达式进行匹配
        let regexp = new RegExp(id);
        
        // 查找匹配的行，并记住最后一个匹配行的索引
        for (let i = lines.length - 1; i >= 0; i--) {
            // 判断当前行是否匹配正则表达式
            if (regexp.test(lines[i])) {
                // 将匹配的行解析为对象
                let user = JSON.parse(lines[i]);
                // 检查 id 是否符合条件
                if (user.id === id) {
                    // 更新用户数据
                    user.coin = String(Number(user.coin) + increment);
                    if(user.coin <= '0'){
                        user.coin = '10'
                    }

                //     if(user.coin < 0){
                //         user.coin = String(0);
                //     }
                    // 更新文件内容
                    lines[i] = JSON.stringify(user);
                    break;
                }
            }
        }
    
        // 将更新后的文件内容写回文件
        fileContent = lines.join('\n');
        fs.writeFileSync(filePath, fileContent + '\n');
    }

    export function update_user_win(id, increment) {
        const filePath = path.join(__dirname, 'user_data.txt');
        let fileContent = fs.readFileSync(filePath, 'utf8');
        let lines = fileContent.split('\n').filter(Boolean);
        
        // 使用正则表达式进行匹配
        let regexp = new RegExp(id);
        
        // 查找匹配的行，并记住最后一个匹配行的索引
        for (let i = lines.length - 1; i >= 0; i--) {
            // 判断当前行是否匹配正则表达式
            if (regexp.test(lines[i])) {
                // 将匹配的行解析为对象
                let user = JSON.parse(lines[i]);
                // 检查 id 是否符合条件
                if (user.id === id) {
                    // 更新用户数据
                    user.win = String(Number(user.win) + increment);

                    // 更新文件内容
                    lines[i] = JSON.stringify(user);
                    break;
                }
            }
        }
    
        // 将更新后的文件内容写回文件
        fileContent = lines.join('\n');
        fs.writeFileSync(filePath, fileContent + '\n');
    }

    export function update_user_winf(id, increment) {
        const filePath = path.join(__dirname, 'user_data.txt');
        let fileContent = fs.readFileSync(filePath, 'utf8');
        let lines = fileContent.split('\n').filter(Boolean);
        
        // 使用正则表达式进行匹配
        let regexp = new RegExp(id);
        
        // 查找匹配的行，并记住最后一个匹配行的索引
        for (let i = lines.length - 1; i >= 0; i--) {
            // 判断当前行是否匹配正则表达式
            if (regexp.test(lines[i])) {
                // 将匹配的行解析为对象
                let user = JSON.parse(lines[i]);
                // 检查 id 是否符合条件
                if (user.id === id) {
                    // 更新用户数据
                    user.winf = String(Number(user.winf) + increment);

                    // 更新文件内容
                    lines[i] = JSON.stringify(user);
                    break;
                }
            }
        }
    
        // 将更新后的文件内容写回文件
        fileContent = lines.join('\n');
        fs.writeFileSync(filePath, fileContent + '\n');
    }

    export function update_user_lv(id, increment) {
        const filePath = path.join(__dirname, 'user_data.txt');
        let fileContent = fs.readFileSync(filePath, 'utf8');
        let lines = fileContent.split('\n').filter(Boolean);
        
        // 使用正则表达式进行匹配
        let regexp = new RegExp(id);
        
        // 查找匹配的行，并记住最后一个匹配行的索引
        for (let i = lines.length - 1; i >= 0; i--) {
            // 判断当前行是否匹配正则表达式
            if (regexp.test(lines[i])) {
                // 将匹配的行解析为对象
                let user = JSON.parse(lines[i]);
                // 检查 id 是否符合条件
                if (user.id === id) {
                    // 更新用户数据
                    user.lv = String(Number(user.lv) + increment);
                    if(user.lv <= '0'){
                        user.lv = '0'
                    }

                    // 更新文件内容
                    lines[i] = JSON.stringify(user);
                    break;
                }
            }
        }
    
        // 将更新后的文件内容写回文件
        fileContent = lines.join('\n');
        fs.writeFileSync(filePath, fileContent + '\n');
    }

    export function update_user_love(id, increment) {
        const filePath = path.join(__dirname, 'user_data.txt');
        let fileContent = fs.readFileSync(filePath, 'utf8');
        let lines = fileContent.split('\n').filter(Boolean);
        
        // 使用正则表达式进行匹配
        let regexp = new RegExp(id);
        
        // 查找匹配的行，并记住最后一个匹配行的索引
        for (let i = lines.length - 1; i >= 0; i--) {
            // 判断当前行是否匹配正则表达式
            if (regexp.test(lines[i])) {
                // 将匹配的行解析为对象
                let user = JSON.parse(lines[i]);
                // 检查 id 是否符合条件
                if (user.id === id) {
                    // 更新用户数据
                    user.love = String(increment);

                    // 更新文件内容
                    lines[i] = JSON.stringify(user);
                    break;
                }
            }
        }
    
        // 将更新后的文件内容写回文件
        fileContent = lines.join('\n');
        fs.writeFileSync(filePath, fileContent + '\n');
    }

export function user_coin_check(id,many){

    const filePath = path.join(__dirname, 'user_data.txt');
    let fileContent = fs.readFileSync(filePath, 'utf8');
    let lines = fileContent.split('\n').filter(Boolean);
    
    // 使用正则表达式进行匹配
    let regexp = new RegExp(id);
    

    for (let i = lines.length - 1; i >= 0; i--) {

        if (regexp.test(lines[i])) {

            let user = JSON.parse(lines[i]);

            if (user.id === id) {
                // 更新用户数据
                if(parseInt(user.coin) >= many){
                    return true
                }else{
                    return false
                }
                
            }
        }
    }

}

export function user_lv_check(id,many){

    const filePath = path.join(__dirname, 'user_data.txt');
    let fileContent = fs.readFileSync(filePath, 'utf8');
    let lines = fileContent.split('\n').filter(Boolean);
    
    // 使用正则表达式进行匹配
    let regexp = new RegExp(id);
    

    for (let i = lines.length - 1; i >= 0; i--) {

        if (regexp.test(lines[i])) {

            let user = JSON.parse(lines[i]);

            if (user.id === id) {
                // 更新用户数据
                if(user.lv >= many){
                    return true
                }else{
                    return false
                }
                
            }
        }
    }

}

export function user_love_check(id,many){

    const filePath = path.join(__dirname, 'user_data.txt');
    let fileContent = fs.readFileSync(filePath, 'utf8');
    let lines = fileContent.split('\n').filter(Boolean);
    
    // 使用正则表达式进行匹配
    let regexp = new RegExp(id);
    

    for (let i = lines.length - 1; i >= 0; i--) {

        if (regexp.test(lines[i])) {

            let user = JSON.parse(lines[i]);

            if (user.id === id) {
                // 更新用户数据
                if(user.love === many){
                    return true
                }else{
                    return false
                }
                
            }
        }
    }

}

export function user_love(id){

    const filePath = path.join(__dirname, 'user_data.txt');
    let fileContent = fs.readFileSync(filePath, 'utf8');
    let lines = fileContent.split('\n').filter(Boolean);
    
    // 使用正则表达式进行匹配
    let regexp = new RegExp(id);
    

    for (let i = lines.length - 1; i >= 0; i--) {

        if (regexp.test(lines[i])) {

            let user = JSON.parse(lines[i]);

            if (user.id === id) {
                // 更新用户数据
                return user.love
  
            }
        }
    }

}