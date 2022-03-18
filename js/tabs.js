document.addEventListener('DOMContentLoaded', () => {
    const tabsButtons = document.querySelectorAll('.design-list__item')
    const tabsDescription = document.querySelectorAll('.design__descr')
    const designImages = document.querySelectorAll('.design-images')

    const changeContent = (array, value) => {
        array.forEach((elem) => {
            if (elem.dataset.tabsField === value) {
                elem.classList.remove('hidden')
            } else {
                elem.classList.add('hidden')
            }
        })
    }

    tabsButtons.forEach((tabButton) => {
        tabButton.addEventListener('click', (event) => {

            const dataValue = tabButton.dataset.tabsHandler
            document.title = event.target.textContent

            changeContent(tabsDescription, dataValue)
            changeContent(designImages, dataValue)


            tabsButtons.forEach((btn) => {

                if (btn === event.target) { btn.classList.add('design-list__item_active') } else { btn.classList.remove('design-list__item_active') }
            })
        });
    })

})