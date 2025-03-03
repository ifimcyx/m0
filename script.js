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
    
    // 生成按钮点击事件
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
            // 这里可以添加生成页面的逻辑
            console.log('生成页面:', inputText);
            
            // 模拟生成过程
            this.querySelector('span').textContent = '生成中...';
            
            setTimeout(() => {
                this.querySelector('span').textContent = '立即生成';
                alert('页面生成请求已发送！');
                
                // 重置输入区域
                if (textarea) {
                    textarea.value = '';
                    textarea.blur();
                }
                placeholder.textContent = '描述你需要生成的页面并发送...';
                placeholder.style.display = 'block';
                if (textarea) {
                    textarea.remove();
                }
            }, 1500);
        }
    });
}); 