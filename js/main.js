// 계산기 기능 구현
function openCalculator(type) {
    switch(type) {
        case 'unit':
            showUnitCalculator();
            break;
        case 'alliance':
            showAllianceCalculator();
            break;
        case 'reward':
            showRewardCalculator();
            break;
        case 'hero-exp':
            showHeroExpCalculator();
            break;
        case 'hero-equipment':
            showHeroEquipmentCalculator();
            break;
        case 'skill':
            showSkillCalculator();
            break;
        default:
            alert('준비 중인 기능입니다.');
    }
}

// 단위 계산기 예시
function showUnitCalculator() {
    const input = prompt('변환할 수치를 입력하세요:');
    if (input && !isNaN(input)) {
        const result = parseFloat(input) * 1000; // 예시 계산
        alert(`결과: ${result.toLocaleString()}`);
    }
}

// 다른 계산기들도 유사하게 구현
function showAllianceCalculator() {
    alert('연맹대전 계산기 - 준비 중');
}

function showRewardCalculator() {
    alert('군비 보상 계산기 - 준비 중');
}

function showHeroExpCalculator() {
    alert('영웅 경험치 계산기 - 준비 중');
}

function showHeroEquipmentCalculator() {
    alert('영웅 장비 계산기 - 준비 중');
}

function showSkillCalculator() {
    alert('스킬 강화 계산기 - 준비 중');
}
