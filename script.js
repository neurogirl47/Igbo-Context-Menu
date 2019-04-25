'use strict';

(function (w, d) {
    if (w.ICM) {
        console.log('Igbo Context Menu already initialized... ')
        return
    }

    const chars_of_interest = ['a', 'e', 'i', 'o', 'u', 'm', 'n']
    const context_menu = d.createElement('section')

    const create_item = (ch, extra='') => {
        [extra, '&#768;', '&#772;'].forEach((diacritic) => {
            if (diacritic && diacritic.length) {
                if (ch === 'n' && extra === '&#775;' && extra !== diacritic) {
                    return
                }

                const span = d.createElement('span')
                span.innerHTML = `${ch}${extra === diacritic ? extra : extra + diacritic}`
                span.className = 'icm-letter-' + ch

                context_menu.appendChild(span)
            }
        })
    }

    chars_of_interest.forEach((ch) => {
        switch (ch) {
            case 'n':
                create_item(ch, '&#775;')
                break
            case 'i':
            case 'o':
            case 'u':
                create_item(ch, '&#803;')
                break
        }

        create_item(ch)
    })

    context_menu.style.display = 'none'
    d.body.appendChild(context_menu)

    w.ICM = function (node) {
        const process = (e) => {
            console.log('e', e)
            // TODO
        }

        return {
            enable: () => {
                node.addEventListener('keyup', process)
                node.dataset.igboContextMenu = 'initialized'
            },
        }
    }

    /* enable context menu for selected elements */
    d.querySelectorAll('[data-igbo-context-menu=init]').forEach(node => ICM(node).enable())
})(window, document)
