document.addEventListener('DOMContentLoaded', function() {
    // 推荐卡片交互效果
    const recommendCards = document.querySelectorAll('.recommend-card');
    
    recommendCards.forEach(card => {
        // 鼠标悬停效果
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 12px rgba(255, 255, 255, 0.1)';
            this.style.background = 'rgba(255, 255, 255, 0.12)';
        });
        
        // 鼠标离开效果
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
            this.style.background = 'rgba(255, 255, 255, 0.08)';
        });
        
        // 点击效果
        card.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
        });
        
        // 释放点击效果
        card.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 12px rgba(255, 255, 255, 0.1)';
        });
        
        // 点击卡片功能
        card.addEventListener('click', function() {
            const text = this.querySelector('.recommend-text').textContent;
            document.querySelector('.placeholder').textContent = text;
        });
    });
    
    // 生成按钮交互效果
    const generateButton = document.querySelector('.generate-button');
    
    generateButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-1px)';
        this.style.boxShadow = '0 2px 8px rgba(255, 255, 255, 0.2)';
    });
    
    generateButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
    
    generateButton.addEventListener('mousedown', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'inset 0 1px 3px rgba(0, 0, 0, 0.2)';
    });
    
    generateButton.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(-1px)';
        this.style.boxShadow = '0 2px 8px rgba(255, 255, 255, 0.2)';
    });
    
    // 模型选择器和高级设置按钮交互效果
    const interactiveElements = document.querySelectorAll('.model-selector, .advanced-settings');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(255, 255, 255, 0.12)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 255, 255, 0.08)';
        });
        
        element.addEventListener('mousedown', function() {
            this.style.background = 'rgba(255, 255, 255, 0.16)';
        });
        
        element.addEventListener('mouseup', function() {
            this.style.background = 'rgba(255, 255, 255, 0.12)';
        });
    });
    
    // 文本输入区域交互
    const textareaContainer = document.querySelector('.textarea-container');
    const placeholder = document.querySelector('.placeholder');
    
    textareaContainer.addEventListener('click', function() {
        // 创建一个真实的textarea元素
        if (!document.querySelector('.real-textarea')) {
            placeholder.style.display = 'none';
            
            const textarea = document.createElement('textarea');
            textarea.className = 'real-textarea';
            textarea.style.width = '100%';
            textarea.style.height = '100%';
            textarea.style.background = 'transparent';
            textarea.style.border = 'none';
            textarea.style.outline = 'none';
            textarea.style.resize = 'none';
            textarea.style.color = '#F9F9F9';
            textarea.style.fontSize = '14px';
            textarea.style.fontFamily = "'PingFang SC', sans-serif";
            textarea.style.lineHeight = '1.57';
            
            // 如果placeholder中有文本（不是默认文本），则将其设置为textarea的值
            if (placeholder.textContent !== '描述你需要生成的页面并发送...') {
                textarea.value = placeholder.textContent;
            }
            
            this.appendChild(textarea);
            textarea.focus();
            
            // 当textarea失去焦点时
            textarea.addEventListener('blur', function() {
                if (this.value.trim() === '') {
                    this.remove();
                    placeholder.style.display = 'block';
                    placeholder.textContent = '描述你需要生成的页面并发送...';
                } else {
                    placeholder.textContent = this.value;
                }
            });
        }
    });
    
    // 模拟的对话数据
    const mockConversation = [
        {
            role: 'user',
            content: '我需要一个电商平台的商品详情页，包含商品图片展示、价格、详情描述和加入购物车功能'
        },
        {
            role: 'assistant',
            content: '好的，我将为您创建一个现代化的电商商品详情页面。该页面将包含以下内容：\n\n1. 商品图片轮播展示区域\n2. 商品标题和价格信息\n3. 商品规格选择（颜色、尺寸等）\n4. 数量选择和加入购物车按钮\n5. 商品详情描述标签页\n6. 商品评价区域\n7. 相关推荐商品\n\n页面将采用响应式设计，确保在移动端和桌面端都有良好的显示效果。'
        },
        {
            role: 'user',
            content: '能否在商品图片旁边添加几张小缩略图，点击后可以切换大图？'
        },
        {
            role: 'assistant',
            content: '当然可以！我已经添加了商品缩略图功能：\n\n1. 在主图片旁边添加了垂直排列的缩略图列表\n2. 点击缩略图会切换主图显示\n3. 当前选中的缩略图会有高亮边框\n4. 鼠标悬停在缩略图上时有放大效果\n\n这种设计既美观又实用，有助于用户查看商品的不同角度和细节。'
        }
    ];

    // 模拟的生成代码
    const mockGeneratedCode = `<!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>商品详情页 - 蓝牙降噪耳机 XM5 Pro</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap" rel="stylesheet">
        <style>
            :root {
                --primary-color: #3b76e1;
                --secondary-color: #f0f8ff;
                --accent-color: #ff6b6b;
                --text-color: #333333;
                --light-gray: #f5f5f5;
                --gray: #e0e0e0;
                --dark-gray: #9e9e9e;
                --white: #ffffff;
                --shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }
            
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Noto Sans SC', sans-serif;
                color: var(--text-color);
                background-color: var(--light-gray);
                line-height: 1.6;
            }
            
            .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 20px;
            }
            
            header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 15px 0;
                border-bottom: 1px solid var(--gray);
                margin-bottom: 30px;
            }
            
            .logo {
                font-size: 24px;
                font-weight: 700;
                color: var(--primary-color);
            }
            
            .nav-links {
                display: flex;
                gap: 20px;
            }
            
            .nav-links a {
                text-decoration: none;
                color: var(--text-color);
                transition: color 0.3s;
                font-weight: 500;
            }
            
            .nav-links a:hover {
                color: var(--primary-color);
            }
            
            .product-container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 40px;
                margin-bottom: 40px;
                background: var(--white);
                border-radius: 12px;
                overflow: hidden;
                box-shadow: var(--shadow);
            }
            
            .product-gallery {
                display: flex;
                padding: 30px;
            }
            
            .thumbnails {
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin-right: 20px;
            }
            
            .thumbnail {
                width: 80px;
                height: 80px;
                border-radius: 8px;
                overflow: hidden;
                cursor: pointer;
                border: 2px solid transparent;
                transition: all 0.3s;
            }
            
            .thumbnail:hover {
                transform: scale(1.05);
            }
            
            .thumbnail.active {
                border-color: var(--primary-color);
            }
            
            .thumbnail img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            
            .main-image {
                flex: 1;
                height: 500px;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: var(--shadow);
            }
            
            .main-image img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
            
            .product-info {
                padding: 30px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            
            .product-title {
                font-size: 28px;
                font-weight: 700;
                margin-bottom: 15px;
                color: var(--text-color);
            }
            
            .product-price {
                font-size: 32px;
                font-weight: 700;
                color: var(--accent-color);
                margin-bottom: 20px;
            }
            
            .original-price {
                font-size: 18px;
                color: var(--dark-gray);
                text-decoration: line-through;
                margin-left: 10px;
            }
            
            .discount-tag {
                display: inline-block;
                background-color: var(--accent-color);
                color: var(--white);
                padding: 4px 8px;
                border-radius: 4px;
                font-size: 14px;
                margin-left: 10px;
            }
            
            .product-rating {
                display: flex;
                align-items: center;
                margin-bottom: 20px;
            }
            
            .stars {
                color: #ffb400;
                font-size: 18px;
                margin-right: 10px;
            }
            
            .rating-count {
                color: var(--dark-gray);
                font-size: 14px;
            }
            
            .product-colors {
                margin-bottom: 20px;
            }
            
            .option-title {
                font-size: 16px;
                font-weight: 500;
                margin-bottom: 10px;
            }
            
            .color-options, .size-options {
                display: flex;
                gap: 10px;
            }
            
            .color-option {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                cursor: pointer;
                position: relative;
                border: 2px solid transparent;
                transition: all 0.3s;
            }
            
            .color-option.active {
                border-color: var(--primary-color);
            }
            
            .color-option:hover {
                transform: scale(1.1);
            }
            
            .color-black { background-color: #000; }
            .color-white { background-color: #fff; border: 1px solid #ddd; }
            .color-blue { background-color: #3b76e1; }
            .color-red { background-color: #e53935; }
            
            .product-size {
                margin-bottom: 20px;
            }
            
            .size-option {
                padding: 8px 12px;
                border: 1px solid var(--gray);
                border-radius: 6px;
                cursor: pointer;
                font-size: 14px;
                transition: all 0.3s;
            }
            
            .size-option:hover {
                border-color: var(--primary-color);
            }
            
            .size-option.active {
                background-color: var(--primary-color);
                color: var(--white);
                border-color: var(--primary-color);
            }
            
            .quantity-selector {
                display: flex;
                align-items: center;
                margin-bottom: 30px;
            }
            
            .quantity-btn {
                width: 36px;
                height: 36px;
                border: 1px solid var(--gray);
                background: var(--white);
                font-size: 18px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s;
            }
            
            .quantity-btn:hover {
                background-color: var(--light-gray);
            }
            
            .quantity-input {
                width: 60px;
                height: 36px;
                border: 1px solid var(--gray);
                text-align: center;
                font-size: 16px;
                margin: 0 8px;
            }
            
            .action-buttons {
                display: flex;
                gap: 15px;
                margin-bottom: 30px;
            }
            
            .add-to-cart, .buy-now {
                padding: 12px 24px;
                border-radius: 6px;
                font-size: 16px;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.3s;
                border: none;
            }
            
            .add-to-cart {
                background-color: var(--secondary-color);
                color: var(--primary-color);
                border: 1px solid var(--primary-color);
            }
            
            .add-to-cart:hover {
                background-color: #e6f0ff;
            }
            
            .buy-now {
                background-color: var(--primary-color);
                color: var(--white);
            }
            
            .buy-now:hover {
                background-color: #2a65d0;
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(59, 118, 225, 0.3);
            }
            
            .product-delivery {
                display: flex;
                align-items: center;
                margin-bottom: 20px;
                padding: 15px;
                background-color: var(--light-gray);
                border-radius: 8px;
            }
            
            .delivery-icon {
                margin-right: 15px;
                font-size: 24px;
                color: var(--primary-color);
            }
            
            .delivery-info {
                font-size: 14px;
            }
            
            .free-shipping {
                color: var(--accent-color);
                font-weight: 500;
            }
            
            /* 标签页样式 */
            .product-tabs {
                margin-top: 40px;
            }
            
            .tab-buttons {
                display: flex;
                border-bottom: 1px solid var(--gray);
                margin-bottom: 30px;
            }
            
            .tab-button {
                padding: 15px 30px;
                cursor: pointer;
                border-bottom: 2px solid transparent;
                font-weight: 500;
                transition: all 0.3s;
            }
            
            .tab-button.active {
                border-bottom-color: var(--primary-color);
                color: var(--primary-color);
            }
            
            .tab-content {
                display: none;
            }
            
            .tab-content.active {
                display: block;
            }
            
            .product-description {
                line-height: 1.8;
            }
            
            .product-description h3 {
                margin: 20px 0 10px;
            }
            
            .product-description ul {
                padding-left: 20px;
                margin-bottom: 20px;
            }
            
            .product-description img {
                max-width: 100%;
                border-radius: 8px;
                margin: 20px 0;
            }
            
            .features-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                gap: 20px;
                margin: 30px 0;
            }
            
            .feature-card {
                padding: 20px;
                background-color: var(--white);
                border-radius: 8px;
                box-shadow: var(--shadow);
                transition: all 0.3s;
            }
            
            .feature-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
            }
            
            .feature-icon {
                font-size: 30px;
                color: var(--primary-color);
                margin-bottom: 15px;
            }
            
            .feature-title {
                font-weight: 500;
                margin-bottom: 10px;
            }
            
            @media (max-width: 768px) {
                .product-container {
                    grid-template-columns: 1fr;
                }
                
                .main-image {
                    height: 350px;
                }
                
                .thumbnails {
                    flex-direction: row;
                    margin-right: 0;
                    margin-bottom: 15px;
                }
                
                .product-gallery {
                    flex-direction: column;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <header>
                <div class="logo">AudioPhile</div>
                <div class="nav-links">
                    <a href="#">首页</a>
                    <a href="#">分类</a>
                    <a href="#">最新</a>
                    <a href="#">热卖</a>
                    <a href="#">联系我们</a>
                </div>
            </header>
            
            <div class="product-container">
                <div class="product-gallery">
                    <div class="thumbnails">
                        <div class="thumbnail active">
                            <img src="https://picsum.photos/id/3/80/80" alt="耳机缩略图1">
                        </div>
                        <div class="thumbnail">
                            <img src="https://picsum.photos/id/4/80/80" alt="耳机缩略图2">
                        </div>
                        <div class="thumbnail">
                            <img src="https://picsum.photos/id/5/80/80" alt="耳机缩略图3">
                        </div>
                        <div class="thumbnail">
                            <img src="https://picsum.photos/id/6/80/80" alt="耳机缩略图4">
                        </div>
                    </div>
                    <div class="main-image">
                        <img src="https://picsum.photos/id/3/600/600" alt="蓝牙降噪耳机">
                    </div>
                </div>
                
                <div class="product-info">
                    <div>
                        <h1 class="product-title">高级蓝牙降噪耳机 XM5 Pro</h1>
                        <div class="product-price">
                            ¥1,899 <span class="original-price">¥2,399</span>
                            <span class="discount-tag">立省500元</span>
                        </div>
                        
                        <div class="product-rating">
                            <div class="stars">★★★★★</div>
                            <div class="rating-count">4.9 (2,384 评价)</div>
                        </div>
                        
                        <div class="product-colors">
                            <div class="option-title">颜色选择</div>
                            <div class="color-options">
                                <div class="color-option color-black active"></div>
                                <div class="color-option color-white"></div>
                                <div class="color-option color-blue"></div>
                                <div class="color-option color-red"></div>
                            </div>
                        </div>
                        
                        <div class="product-size">
                            <div class="option-title">版本选择</div>
                            <div class="size-options">
                                <div class="size-option active">标准版</div>
                                <div class="size-option">豪华版</div>
                                <div class="size-option">限量版</div>
                            </div>
                        </div>
                        
                        <div class="quantity-selector">
                            <button class="quantity-btn">-</button>
                            <input type="text" class="quantity-input" value="1">
                            <button class="quantity-btn">+</button>
                        </div>
                        
                        <div class="action-buttons">
                            <button class="add-to-cart">加入购物车</button>
                            <button class="buy-now">立即购买</button>
                        </div>
                    </div>
                    
                    <div class="product-delivery">
                        <div class="delivery-icon">🚚</div>
                        <div class="delivery-info">
                            <span class="free-shipping">免运费</span> | 预计3-5天送达 | 支持7天无理由退换
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="product-tabs">
                <div class="tab-buttons">
                    <div class="tab-button active">商品详情</div>
                    <div class="tab-button">规格参数</div>
                    <div class="tab-button">用户评价</div>
                    <div class="tab-button">配送与退换</div>
                </div>
                
                <div class="tab-content product-description active">
                    <h3>产品介绍</h3>
                    <p>XM5 Pro蓝牙降噪耳机采用先进的主动降噪技术，能够有效隔绝外界噪音，让您沉浸在纯净的音乐世界中。配备全新研发的40mm驱动单元，提供震撼的低音和清晰的高音，呈现细腻动听的音质体验。</p>
                    
                    <div class="features-grid">
                        <div class="feature-card">
                            <div class="feature-icon">🔊</div>
                            <div class="feature-title">Hi-Res认证音质</div>
                            <p>支持LDAC高清音频编码，还原音乐原始细节，给您身临其境的听觉体验。</p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">🔋</div>
                            <div class="feature-title">超长续航</div>
                            <p>单次充电可持续使用30小时，快充10分钟可使用5小时，随时随地享受音乐。</p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">🌬️</div>
                            <div class="feature-title">先进降噪技术</div>
                            <p>8个高精度麦克风组成降噪系统，可降噪高达40dB，让您在嘈杂环境中也能专注。</p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">🤖</div>
                            <div class="feature-title">智能语音助手</div>
                            <p>内置多平台智能语音助手，支持语音控制播放、接听电话、查询信息等多种功能。</p>
                        </div>
                    </div>
                    
                    <img src="https://picsum.photos/id/96/1200/400" alt="产品细节展示">
                    
                    <h3>材质与做工</h3>
                    <p>耳机采用高级蛋白皮耳垫和轻量化合金材质，佩戴舒适且坚固耐用。人体工学设计确保长时间佩戴也不会感到疲劳，是音乐爱好者、通勤者和商务人士的理想选择。</p>
                </div>
            </div>
        </div>
        
        <script>
            // 切换商品缩略图
            document.querySelectorAll('.thumbnail').forEach(thumbnail => {
                thumbnail.addEventListener('click', function() {
                    // 移除所有缩略图的active类
                    document.querySelectorAll('.thumbnail').forEach(thumb => {
                        thumb.classList.remove('active');
                    });
                    
                    // 添加active类到当前点击的缩略图
                    this.classList.add('active');
                    
                    // 获取当前缩略图的图片源
                    const imgSrc = this.querySelector('img').src;
                    
                    // 更新主图
                    const mainImg = document.querySelector('.main-image img');
                    mainImg.src = imgSrc.replace('/80/80', '/600/600');
                });
            });
            
            // 数量选择器功能
            const minusBtn = document.querySelector('.quantity-btn:first-child');
            const plusBtn = document.querySelector('.quantity-btn:last-child');
            const quantityInput = document.querySelector('.quantity-input');
            
            minusBtn.addEventListener('click', function() {
                let value = parseInt(quantityInput.value);
                if (value > 1) {
                    quantityInput.value = value - 1;
                }
            });
            
            plusBtn.addEventListener('click', function() {
                let value = parseInt(quantityInput.value);
                quantityInput.value = value + 1;
            });
            
            // 颜色选择功能
            document.querySelectorAll('.color-option').forEach(option => {
                option.addEventListener('click', function() {
                    document.querySelectorAll('.color-option').forEach(opt => {
                        opt.classList.remove('active');
                    });
                    this.classList.add('active');
                });
            });
            
            // 版本选择功能
            document.querySelectorAll('.size-option').forEach(option => {
                option.addEventListener('click', function() {
                    document.querySelectorAll('.size-option').forEach(opt => {
                        opt.classList.remove('active');
                    });
                    this.classList.add('active');
                });
            });
            
            // 标签页切换
            document.querySelectorAll('.tab-button').forEach((button, index) => {
                button.addEventListener('click', function() {
                    document.querySelectorAll('.tab-button').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    document.querySelectorAll('.tab-content').forEach(content => {
                        content.classList.remove('active');
                    });
                    
                    this.classList.add('active');
                    document.querySelectorAll('.tab-content')[index].classList.add('active');
                });
            });
        </script>
    </body>
    </html>`;

    // 生成按钮点击事件修改
    generateButton.addEventListener('click', function() {
        const textarea = document.querySelector('.real-textarea');
        let inputText = '';
        
        if (textarea) {
            inputText = textarea.value.trim();
        } else {
            inputText = placeholder.textContent;
            if (inputText === '描述你需要生成的页面并发送...') {
                inputText = '';
            }
        }
        
        if (inputText !== '') {
            // 切换到结果视图
            const initialView = document.querySelector('.content-frame');
            const resultView = document.querySelector('.result-view');
            
            initialView.classList.add('hidden');
            resultView.classList.remove('hidden');
            
            // 添加用户消息
            addMessage('user', inputText);
            
            // 模拟AI响应
            setTimeout(() => {
                // 添加AI消息
                addMessage('assistant', mockConversation[1].content);
                
                // 更新预览和代码
                updatePreview(mockGeneratedCode);
            }, 1000);
        }
    });

    // 添加消息到聊天区域
    function addMessage(role, content) {
        const messagesContainer = document.querySelector('.chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${role}-message`;
        messageDiv.textContent = content;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // 更新预览和代码
    function updatePreview(code) {
        // 更新代码面板
        document.querySelector('.generated-code').textContent = code;
        
        // 更新预览面板
        const previewFrame = document.getElementById('preview-frame');
        previewFrame.contentDocument.open();
        previewFrame.contentDocument.write(code);
        previewFrame.contentDocument.close();
    }

    // 标签切换功能
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有标签的active类
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.preview-panel, .code-panel').forEach(panel => panel.classList.remove('active'));
            
            // 添加active类到当前标签
            button.classList.add('active');
            const targetPanel = button.dataset.tab === 'preview' ? '.preview-panel' : '.code-panel';
            document.querySelector(targetPanel).classList.add('active');
        });
    });

    // 聊天输入框发送功能
    document.querySelector('.send-button').addEventListener('click', () => {
        const textarea = document.querySelector('.chat-input textarea');
        const message = textarea.value.trim();
        
        if (message) {
            addMessage('user', message);
            textarea.value = '';
            
            // 模拟AI响应
            setTimeout(() => {
                addMessage('assistant', '我明白了，让我为您调整代码...');
            }, 1000);
        }
    });

    // 聊天输入框Enter发送功能
    document.querySelector('.chat-input textarea').addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            document.querySelector('.send-button').click();
        }
    });
}); 