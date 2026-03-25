document.addEventListener('DOMContentLoaded', () => {
    // 1. 处理主选项卡切换
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // 这里可以添加逻辑隐藏/显示对应的内容块
            console.log(`切换到: ${tab.dataset.target}`);
        });
    });

    // 2. 模拟数据增长效果
    const stats = document.querySelectorAll('.stat-item strong');
    stats.forEach(stat => {
        const target = parseInt(stat.innerText);
        if (isNaN(target)) return;
        
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.innerText = target.toLocaleString();
                clearInterval(timer);
            } else {
                stat.innerText = Math.floor(current).toLocaleString();
            }
        }, 20);
    });

    // 3. 简单的视频预览点击提示
    document.querySelector('.video-preview').addEventListener('click', () => {
        alert('正在加载实验引导视频...');
    });
});


