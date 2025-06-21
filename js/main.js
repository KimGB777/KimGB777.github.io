// 페이지 로드 완료 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 메뉴 버튼 클릭 이벤트
    const menuButtons = document.querySelectorAll('.menu-button');
    
    menuButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // 페이지 전환 애니메이션 효과
            button.style.transform = 'scale(0.98)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 150);
        });
    });
});
