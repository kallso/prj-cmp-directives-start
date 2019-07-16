import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
    characters = [
        { name: 'Luke Skywalker', side: 'light'},
        { name: 'Darth Vader', side: 'dark'},
        { name: 'Obi-Wan Kenobi', side: 'light'},
        { name: 'Darth Sidious', side: 'dark'},
        { name: 'Darth Maul', side: 'dark'},
        { name: 'Qui-Gon Jinn', side: 'light'},
        { name: 'Yoda', side: 'light'},
        { name: 'Count Dooku', side: 'dark'},
    ];

    chosenList = 'all';

    constructor() { }

    ngOnInit() {
    }

    onChoose(side) {
        this.chosenList = side;
    }

    getCharacters() {
        if (this.chosenList === 'all') {
            return this.characters.slice();
        }

        return this.characters.filter( char => char.side === this.chosenList );
    }

    onSideChosen(charInfo) {
        const pos = this.characters.findIndex(char => char.name === charInfo.name);
        this.characters[pos].side = charInfo.side;
    }
}
