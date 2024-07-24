import {driver} from "driver.js";
import "driver.js/dist/driver.css";

export function tour() {
    const driverObj = driver({
        showProgress: true,
        steps: [
            {
                element: '.content-wrapper',
                popover: {
                    title: 'Simulacija tehnickog zadatka',
                    description: 'Dobrodosla Margarita (mage_lapad), ovo je pokusaj simulacije tehnickog zadatka kojeg ces imat uskoro. Puno srece sa pravim zadatkom :*',
                    side: "left",

                }
            },
            {
                element: '.add-todo',
                popover: {
                    title: 'Todo input',
                    description: 'Jednostavna input komponenta za dodavanje itema na listu',
                    side: "left",
                }
            },
            {
                element: '.todo-list',
                popover: {
                    title: 'Lista Todo-ova',
                    description: 'Komponenta koja lista todove, klikom na ime itema se redirectamo na page s tim todo-om. Takoder, na ovoj komponenti se treba moc obrisat todo',
                    side: "left",
                }
            },
            {
                element: '.content-wrapper',
                popover: {
                    title: 'Ajmo naši!!!!',
                    description: 'Eto, kratki info gotov, sretno sa zadatkom, samo opusteno, nema panike :).',
                    side: 'right'
                }
            }
        ]
    })
    driverObj.drive();
}

