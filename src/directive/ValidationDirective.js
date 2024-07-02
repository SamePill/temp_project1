export const ValidationDirective = {
    mounted: (el, binding, context) => {

        // const value = context.attrs['onUpdate:modelValue'];

        const btn = document.getElementById('btn');

        btn.addEventListener('click', () => {

            if(context.dirs[0].value == ''){
                el.style.border = '1.5px solid #ff5252'
                let stmt = ' 선택해주세요'
                if(binding.value.div == 'input'){
                    stmt = ' 입력해주주세요'
                }else if(binding.value.div == 'slct'){
                    stmt = ' 선택해주세요'
                }else{
                    stmt = binding.value.div;
                }
                const span = document.createElement('span');
                span.className   = 'text-sm text-left mt-[5px] text-[#ff5252]';
                span.textContent = binding.value.val + stmt;
                el.parentNode.appendChild(span);
            }
        });
    }
}