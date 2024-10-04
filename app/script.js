let selections = [];
let selectedObjects = [];

const data = ["Human hand","Human nose","Rugby ball","Axe","Skateboard","Oyster","Submarine sandwich","Countertop","Zucchini","Raven","Bread","Harp","Balance beam","Tool","Jet ski","Clothing","Envelope","Frog","Unicycle","Hot dog","Whale","Kettle","Glove","Snowboard","Horizontal bar","Paper towel","Stretcher","Guacamole","Tower","Armadillo","Slow cooker","Musical keyboard","Mobile phone","Human arm","Butterfly","Burrito","Toy","Cat furniture","Starfish","Marine mammal","Lynx","Gondola","Kitchen knife","Tick","Apple","Face powder","Barrel","Ladybug","Tap","Wine rack","Milk","Rocket","Cantaloupe","Lobster","Honeycomb","Flashlight","Treadmill","Binoculars","Pretzel","Kitchen utensil","Parrot","Golf cart","Train","Towel","Dishwasher","Luggage and bags","Shrimp","Human body","Peach","Door","French fries","Shelf","Computer keyboard","Snowman","Rose","Squirrel","Lily","Sink","Fast food","Cake stand","Organ","Radish","Piano","Stop sign","Monkey","Trumpet","Fox","Crown","Shorts","Plumbing fixture","Furniture","Dog bed","Skull","Bust","Pancake","Hippopotamus","Sports equipment","Window","Ipod","Bowling equipment","Snake","Goat","Tie","Flying disc","Bicycle wheel","Sandal","Helmet","Wood-burning stove","Studio couch","Seahorse","Baked goods","Mirror","Knife","Mixing bowl","Drawer","Baseball glove","Hat","Carrot","Dagger","Drum","Musical instrument","Sock","Fish","Animal","Cookie","Computer mouse","Boot","Pear","Syringe","Scorpion","Rabbit","Lighthouse","Human beard","Dumbbell","Billboard","Man","Rifle","Light switch","Toaster","Leopard","Teddy bear","Jellyfish","Ice cream","Golf ball","Table","Saxophone","Wheelchair","Baseball bat","Boat","Turkey","Vehicle","Ceiling fan","Earrings","Bird","Traffic light","Pizza","Kangaroo","Lamp","Stapler","Cattle","Tart","Closet","Convenience store","Measuring cup","Mushroom","Pizza cutter","Television","Violin","Truck","Cocktail","Window blind","Horse","Waffle iron","Pig","Watercraft","Segway","Miniskirt","Palm tree","Cream","Desk","Backpack","Human eye","Spice rack","Taco","Potato","Scissors","Fruit","Tin can","Whiteboard","Nightstand","Alarm clock","Egg","Duck","Microphone","Flowerpot","Cassette deck","Home appliance","Human ear","Broccoli","Drink","Drinking straw","Frying pan","Remote control","Ball","Girl","Tennis racket","Hedgehog","Filing cabinet","Dragonfly","Jacuzzi","Football","Bagel","Stairs","Submarine","Swimwear","Wall clock","Telephone","Lizard","Harbor seal","Food processor","Cutting board","Wardrobe","Cheetah","Mouse","House","Cat","Sunglasses","Shark","Seat belt","Car","Clock","Isopod","Coffee cup","Vehicle registration plate","Handgun","Van","Dress","Banana","Couch","Bench","Candy","Bathtub","Wine glass","Common fig","Fountain","Infant bed","Blender","Guitar","Sombrero","Cricket ball","Carnivore","Cheese","Moths and butterflies","Sparrow","Koala","Training bench","Panda","Ladder","Light bulb","Billiard table","Auto part","Human leg","Coat","Otter","Bow and arrow","Salad","Magpie","Raccoon","Spoon","Woodpecker","Scarf","Marine invertebrates","Mug","Pomegranate","Lipstick","Bat","Antelope","Food","Parachute","Grape","Flute","Plant","Deer","Street light","Coffeemaker","Soap dispenser","Hamster","Weapon","Sword","Handbag","Harpsichord","Turtle","Elephant","Perfume","Brassiere","Dog","Computer monitor","High heels","Tree house","Snowplow","Motorcycle","Sofa bed","Watch","Houseplant","Muffin","Rhinoceros","Bottle opener","Lavender","Flag","Grapefruit","Headphones","Human hair","Wrench","Land vehicle","Centipede","Eagle","Shower","Cake","Lifejacket","Bull","Watermelon","Sushi","Cannon","Snail","Coffee table","Beaker","Human head","Squash","Cucumber","Pasta","Bee","Pencil case","Building","Barge","Lantern","Juice","Crocodile","Serving tray","Trousers","Kite","Bell pepper","Hand dryer","Fashion accessory","Suit","Goldfish","Medical equipment","Tire","Diaper","Asparagus","Cupboard","Table tennis racket","Goggles","Jaguar","Chopsticks","Digital clock","Bathroom accessory","Flower","Sea lion","Cart","Balloon","Owl","Teapot","Beetle","Toilet paper","Dolphin","Saucer","Volleyball","Paddle","Shellfish","Chisel","Nail","Loveseat","Ant","Bicycle helmet","Screwdriver","Plate","Doll","Kitchen appliance","Goose","Toothbrush","Tiger","Hiking equipment","Picnic basket","Bronze sculpture","Pumpkin","Mango","Wine","Platter","Snack","Tortoise","Pillow","Human foot","Personal care","Eraser","Umbrella","Cello","Picture frame","Pen","Drill","Giraffe","Tiara","Reptile","Football helmet","Whisk","Trombone","Caterpillar","Human mouth","Boy","Lemon","Woman","Spatula","Beer","Banjo","Microwave oven","Tableware","Sheep","Seafood","Scoreboard","Sculpture","Kitchen & dining room table","Ring binder","Washing machine","Ratchet","Scale","Mammal","Door handle","Surfboard","Tea","Artichoke","Person","Curtain","Cabbage","Horn","Box","Crab","Coin","Bicycle","Oboe","Stethoscope","Laptop","Chair","Castle","Waffle","Alpaca","Ambulance","Swimming pool","Chainsaw","Bed","Fork","Power plugs and sockets","Missile","Skunk","Shirt","Squid","Shotgun","Tomato","Vase","Snowmobile","Pineapple","Fireplace","Dinosaur","Wok","Stool","Tent","Croissant","Glasses","Hammer","Punching bag","Helicopter","Doughnut","Polar bear","Poster","Camera","Human face","Oven","Candle","Porch","Willow","Strawberry","Camel","Parking meter","Sea turtle","Insect","Pastry","Coffee","Necklace","Adhesive tape","Taxi","Traffic sign","Bowl","Fire hydrant","Fax","Jacket","Worm","Racket","Red panda","Cocktail shaker","Book","Spider","Ski","Falcon","Roller skates","Suitcase","Dairy","Lion","Sun hat","Cosmetics","Hamburger","Sewing machine","Chicken","Briefcase","Office supplies","Bear","Bookcase","Tree","Brown bear","Plastic bag","Accordion","Canoe","Ruler","Blue jay","Tablet computer","Tripod","Salt and pepper shakers","Mixer","Humidifier","Sunflower","Airplane","Sandwich","Skirt","Zebra","Dice","Maple","Refrigerator","Aircraft","Stationary bicycle","Dessert","Toilet","Jug","Porcupine","Calculator","Corded phone","Winter melon","Canary","Sports uniform","Bidet","Footwear","Jeans","Hair dryer","Office building","Bathroom cabinet","Coconut","Swim cap","Mechanical fan","Cabinetry","Band-aid","Rays and skates","Penguin","Tennis ball","Beehive","Swan","Vegetable","Ostrich","Tank","Printer","Can opener","Bus","Skyscraper","Fedora","Bottle","Invertebrate","Waste container","Cowboy hat","Heater","Limousine","Chest of drawers","Wheel","Gas stove","Belt","Christmas tree","Mule","Popcorn","Orange","Pitcher"];
// Khi trang được tải, Model 1 sẽ được chọn mặc định
document.getElementById('model1').checked = true;

// Hàm để lấy model đã chọn
function getSelectedModel() {
    const model1 = document.getElementById('model1').checked;
    return model1 ? 'model1' : 'model2';
}

// hàm tải file JSON theo folder name
async function loadJsonForFolder(folderName) {
    const url = `../AIC_Data/media-info/${folderName}.json`; 
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Could not load JSON for folder ${folderName}`);
    }
    
    return await response.json();
}

async function sendObjects() {
    if (selectedObjects.length > 0) {
        let payload = {
            objects: selectedObjects,
        };

        // Gửi yêu cầu tới API 
        const response = await fetch('http://127.0.0.1:8000/send_objects/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            const result = await response.json();
            console.log(result);
            alert("Objects sent successfully!");
        } else {
            alert("Failed to send objects.");
        }
    } else {
        alert('No objects selected.');
    }
}

// Hàm xử lý khi nhấp chuột phải vào ảnh để lấy 25 ảnh trước và sau
function handleImageRightClick(event, imageName, folderName) {
    event.preventDefault(); // Ngăn chặn menu chuột phải mặc định

    // Gửi yêu cầu đến FastAPI để lấy 25 ảnh trước và 25 ảnh sau
    fetchSurroundingImages(imageName, folderName)
        .then(data => {
            //displayImages(data.images); // Hiển thị các ảnh xung quanh
            displaySurroundingImagesInSidebar(data.images);
        })
        .catch(error => {
            console.error('Error fetching surrounding images:', error);
        });
}

// Hàm lấy ảnh trước và sau dựa trên tên ảnh và folder
async function fetchSurroundingImages(imageName, folderName) {
    const url = `http://127.0.0.1:8000/surrounding_images/${folderName}/${imageName}`;
    const response = await fetch(url);

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Failed to fetch surrounding images');
    }
}

// Thêm lựa chọn vào hàng đợi
function handleSelection(value) {
    if (!selections.includes(value)) {
        selections.push(value); // Thêm giá trị vào hàng đợi nếu chưa có
        console.log("Added selection:", value); // Xác nhận giá trị được thêm
        
        // Thêm vào UI
        const listItem = document.createElement('li');
        listItem.textContent = value;
        document.getElementById('selectedList').appendChild(listItem);


        // Tạo nút xóa
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.onclick = function() {
            listItem.remove(); // Xóa mục khỏi UI
            selections = selections.filter(item => item !== value); // Xóa mục khỏi mảng
        };

        listItem.appendChild(deleteButton);
        document.getElementById('selectedList').appendChild(listItem);
    }
}
// Hàm xử lý khi nhấp chuột vào nút "Send Objects"
// async function sendObjects() {
//     if (selectedObjects.length > 0) {
//         // Tạo chuỗi query từ các object đã chọn
//         let query = selectedObjects.join(', ');  // Nối tất cả các object bằng dấu phẩy
        
//         // Gọi hàm handleSubmit để gửi các object đã chọn như nút "Send"
//         let output = await answer(query);
//         displayChat(query, output);

//         // Sau khi gửi, bạn có thể quyết định có muốn xóa các object đã chọn hay không
//         clearObjects();  // Xóa object sau khi gửi (nếu muốn giữ lại, bạn có thể bỏ dòng này)
//     } else {
//         alert('No objects selected.');
//     }
// }

// Hàm xóa tất cả các đối tượng trong hàng đợi object
function clearObjects() {
    selectedObjects = [];
    const objectList = document.getElementById('objectList');
    while (objectList.firstChild) {
        objectList.removeChild(objectList.firstChild);
    }
}

// Hàm thêm object vào hàng đợi object
function handleSelectionObject(value) {
    if (!selectedObjects.includes(value)) {
        selectedObjects.push(value); // Thêm giá trị vào hàng đợi nếu chưa có
        console.log("Added selection:", value); // Xác nhận giá trị được thêm
        
        // Thêm vào UI
        const listItem = document.createElement('li');
        listItem.textContent = value;
        document.getElementById('objectList').appendChild(listItem);

        // Tạo nút xóa
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.onclick = function() {
            listItem.remove(); // Xóa mục khỏi UI
            selectedObjects = selectedObjects.filter(item => item !== value); // Xóa mục khỏi mảng
        };

        listItem.appendChild(deleteButton);
        document.getElementById('objectList').appendChild(listItem);
    }
}

function handleCheckboxChange(checkbox) {
    const value = checkbox.value;
    if (checkbox.checked) {
        // Nếu checkbox được đánh dấu, thêm giá trị vào selections và hiển thị
        if (!selections.includes(value)) {
            selections.push(value);
            const listItem = document.createElement('li');
            listItem.textContent = value;
            listItem.id = 'item-' + value; // Thêm ID duy nhất cho mục để dễ dàng xóa sau này
            document.getElementById('selectedList').appendChild(listItem);
        }
    } else {
        // Nếu checkbox bị bỏ đánh dấu, xóa giá trị khỏi selections và ẩn hiển thị
        const index = selections.indexOf(value);
        if (index > -1) {
            selections.splice(index, 1);
            const listItem = document.getElementById('item-' + value);
            listItem && listItem.parentNode.removeChild(listItem);
        }
    }
}


// hàm gửi yêu cầu đến FastAPI và nhận các ảnh của từng model
async function fetchImage(query, imageDataURL = null) {
    const selectedModel = getSelectedModel(); // Lấy model đã chọn
    const payload = {
        query: query,
        model: selectedModel, // Truyền model đã chọn
        ...(imageDataURL ? { image: imageDataURL } : {})
    };
    const url = imageDataURL ? 'http://127.0.0.1:8000/upload_image/' : 'http://127.0.0.1:8000/search_images/';

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Images not found');
    }
}

// hàm xử lý input hoặc hình vẽ và trả về output nhờ FastAPI
async function answer(query, imageDataURL = null) {
    try {
        const data = await fetchImage(query, imageDataURL);
        console.log(data);
        return { images: data.images };
    } catch (error) {
        return { id: 'Error', images: [] };
    }
}

// Hàm hiển thị danh sách các ảnh
function displaySurroundingImagesInSidebar(images) {
    const imageContainer = document.querySelector('.sidebar-right'); 
    imageContainer.innerHTML = '';  // Xóa các ảnh hiện tại

    images.forEach(imageData => {
        let imageNameWithoutExtension = imageData.image_name.replace('.webp', '');
        const imageId = `${imageNameWithoutExtension}_${imageData.folder_name}`;

        const imgWrapper = document.createElement('div');
        imgWrapper.className = 'img-wrapper';

        const img = document.createElement('img');
        img.src = imageData.image_url;
        img.alt = imageData.image_name;
        img.style.cursor = 'pointer';
        img.loading = 'lazy'; 

        // Khi nhấp chuột phải vào ảnh, sẽ hiển thị thêm 25 ảnh trước và sau
        img.oncontextmenu = (event) => handleImageRightClick(event, imageData.image_name, imageData.folder_name);
        
        const imgInfo = document.createElement('div');
        imgInfo.className = 'img-info';
        imgInfo.textContent = imageId;

        // Thêm checkbox để lựa chọn
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'imageSelect';
        checkbox.value = imageId;

        // Kiểm tra nếu ảnh này đã được chọn trước đó thì giữ checkbox được đánh dấu
        if (selections.includes(imageId)) {
            checkbox.checked = true;
        }

        checkbox.onchange = () => handleSelection(checkbox.value);

        const label = document.createElement('label');
        label.className = 'image-checkbox';
        label.appendChild(checkbox);
        label.appendChild(img);
        label.appendChild(imgInfo);

        imgWrapper.appendChild(label);
        imageContainer.appendChild(imgWrapper);
    });
}

function displayChat(input, output) {
    let chatContainer = document.getElementById('chat');
    chatContainer.innerHTML = '';
    let inputMessage = document.createElement('div');
    inputMessage.className = 'message input-message';
    inputMessage.textContent = input;

    let outputMessage = document.createElement('div');
    outputMessage.className = 'message output-message';

    if (output.id === 'Error') {
        outputMessage.textContent = 'Images not found';
    } else {
        let imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';

        output.images.forEach(imageData => {
            let imgWrapper = document.createElement('div');
            imgWrapper.className = 'img-wrapper';

            let img = document.createElement('img');
            img.src = imageData.image_url;
            img.alt = imageData.image_name;
            img.style.cursor = 'pointer';
            img.loading = 'lazy'; 

            // mở link YouTube
            img.oncontextmenu = (event) => handleImageRightClick(event, imageData.image_name, imageData.folder_name);

            let imageNameWithoutExtension = imageData.image_name.replace('.webp', '');
            let folderName = imageData.folder_name;

            let imgInfo = document.createElement('div');
            imgInfo.className = 'img-info';
            imgInfo.textContent = `${imageNameWithoutExtension}_${folderName}`;

            // Thêm checkbox
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'imageSelect';
            checkbox.value = `${imageNameWithoutExtension}_${folderName}`;
            checkbox.onchange = () => handleSelection(checkbox.value);
            // checkbox.onchange = () => handleCheckboxChange(checkbox);

            let label = document.createElement('label');
            label.className = 'image-checkbox';
            label.appendChild(checkbox);
            label.appendChild(img);
            label.appendChild(imgInfo);

            imgWrapper.appendChild(label);
            imageContainer.appendChild(imgWrapper);
        });

        outputMessage.appendChild(imageContainer);
    }

    chatContainer.appendChild(inputMessage);
    chatContainer.appendChild(outputMessage);
}
// function exportToCSV() {
//     const filename = document.getElementById('filenameInput').value.trim() || 'selected_images';
//     const description = document.getElementById('descriptionInput').value.trim() || '';
//     const checkboxes = document.querySelectorAll('input[name="imageSelect"]:checked');

//     // set để loại bỏ trùng lặp và thu thập dữ liệu từ checkboxes
//     let dataSet = new Set();
//     checkboxes.forEach(cb => {
//         dataSet.add(cb.value);
//     });

//     // add dữ liệu từ selections nếu chưa tồn tại trong Set
//     selections.forEach(s => {
//         if (!dataSet.has(s)) {
//             dataSet.add(s);
//         }
//     });

//     // create csv
//     let csvContent = "data:text/csv;charset=utf-8,";
//     // csvContent += "Video ID,Frame ID\r\n";

//     dataSet.forEach(item => {
//         const parts = item.split('_');
//         let frameId = parts[0];
//         const videoId = parts.slice(1).join('_');
//         frameId = parseInt(frameId, 10);
//         csvContent += description ? `${videoId},${frameId},${description}\r\n` : `${videoId},${frameId}\r\n`;
//     });

//     // download csv
//     const encodedUri = encodeURI(csvContent);
//     const link = document.createElement("a");
//     link.setAttribute("href", encodedUri);
//     link.setAttribute("download", `${filename}.csv`);
//     link.style.visibility = 'hidden';
//     document.body.appendChild(link);
    
//     link.click();
//     document.body.removeChild(link);
// }


function exportToCSV() {
    const filename = document.getElementById('filenameInput').value.trim() || 'selected_images';
    const description = document.getElementById('descriptionInput').value.trim() || '';
    
    let dataArray = [...selections];

    let csvContent = "data:text/csv;charset=utf-8,";

    dataArray.forEach(item => {
        const parts = item.split('_');
        let frameId = parts[0];
        const videoId = parts.slice(1).join('_');
        frameId = parseInt(frameId, 10);
        csvContent += description ? `${videoId},${frameId},${description}\r\n` : `${videoId},${frameId}\r\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${filename}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    
    link.click();
    document.body.removeChild(link);
}


// xoa dau tick
function clearAllCheckboxes() {
    const checkboxes = document.querySelectorAll('input[name="imageSelect"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;  // Bỏ tick tất cả các checkboxes
    });

    selections = [];

    // Xóa tất cả các mục khỏi danh sách UI
    const list = document.getElementById('selectedList');
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

// Hàm xử lý gợi ý autocomplete
function autocomplete(inputElement, dataArray, listElementId) {
    const listContainer = document.getElementById(listElementId);

    inputElement.addEventListener('input', function() {
        const val = this.value;
        listContainer.innerHTML = ''; // Xóa các gợi ý hiện tại

        if (!val) {
            return false;
        }

        // Lọc dữ liệu dựa trên nhập liệu
        const filteredData = dataArray.filter(item => 
            item.toLowerCase().includes(val.toLowerCase())
        );

        // Hiển thị tối đa 10 gợi ý
        filteredData.slice(0, 10).forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('autocomplete-item');

            // Đánh dấu phần khớp với từ khóa nhập vào
            const startIndex = item.toLowerCase().indexOf(val.toLowerCase());
            const endIndex = startIndex + val.length;
            itemDiv.innerHTML = `${item.substring(0, startIndex)}<strong>${item.substring(startIndex, endIndex)}</strong>${item.substring(endIndex)}`;

            // Khi nhấp vào gợi ý, thêm object vào hàng đợi
            itemDiv.addEventListener('click', function() {
                inputElement.value = item; // Đưa gợi ý vào input
                listContainer.innerHTML = ''; // Xóa danh sách gợi ý

                handleSelectionObject(item); // Thêm object vào hàng đợi và hiển thị
            });

            listContainer.appendChild(itemDiv);
        });
    });

    // Đóng danh sách gợi ý khi nhấp ra ngoài
    document.addEventListener('click', function (e) {
        if (e.target !== inputElement) {
            listContainer.innerHTML = '';
        }
    });
}


// Khởi tạo autocomplete cho searchSidebar
const searchSidebar = document.getElementById('searchSidebar');
autocomplete(searchSidebar, data, 'autocomplete-sidebar-list');


// Xử lý khi người dùng nhấn nút gửi cho input dạng text
async function handleSubmit() {
    let inputField = document.getElementById('inputField');
    let input = inputField.value.trim();

    if (input) {
        let output = await answer(input);
        displayChat(input, output);
    }

    inputField.value = ''; // Xóa nội dung trong text box sau khi gửi
}


// Xử lý khi người dùng nhấn phím Enter
function handleKeyDown(event) {
    if (event.key === 'Enter') {
        handleSubmit();
    }
}

// Example: Hiển thị thông báo lỗi
function displayError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.textContent = message;
    errorDiv.style.color = 'red';
    document.getElementById('chat').appendChild(errorDiv);
}
