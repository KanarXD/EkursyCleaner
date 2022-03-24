const removeItemList = [
	'Komunikacja człowiek-komputer',
	'Zarządzania bazami SQL i NoSQL',
	'Zarządzanie Bazami SQL i NoSQL (laboratoria, st. stac. I st., Inf, 5. sem.) - 21/22-Z',
	'Sztuczna inteligencja - laboratoria',
	'Sztuczna inteligencja - wykład',
	'[S] Systemy wbudowane',
	'[S] Systemy wbudowane - laboratoria',
	'Sieci komputerowe 2 stac',
	'Sieci komputerowe 2',
	'Wspomaganie decyzji - wykład',
	'Wspomaganie Decyzji - laboratorium (M. Szeląg)',
	'Statistica - Analizy wielowymiarowe',
    'Programowanie obiektowe',
    'PO4 Podstawy robotyki',
    'Sieci komputerowe 1 (laboratorium)',
	'Inżynieria oprogramowania (inf)',
    'Informatyka st 1 rok 2 sem 3',
	'Przedmiot obieralny 9: Przetwarzanie języka naturalnego / Natural language processing',
	'Przedmiot obieralny 8:  Aplikacje mobilne'
]

let menuItemList = Array.from(document.getElementsByClassName('dropdown-item'));

menuItemList
    .filter(menuItem => removeItemList.includes(menuItem.innerText))
    .forEach(menuItem => menuItem.remove());




