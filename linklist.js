
class Node{
	constructor(data, next = null){
		this.data = data;
		this.next = next;
	}
}

class linklist{
	constructor(){
		this.head = null;
		this.size = 0;
	}

	insertFirstNode(data){
		this.head = new Node(data,this.head);
		this.size++;
	}
	insertLast(data){
		let node = new Node(data);
		let current;
		if(!this.head){
			this.head = node;

		}else{
			current = this.head;
			while(current.next){
				current = current.next;
			}
			current.next = node;
		}
		this.size++;
	}
	InsertAt(data,index){
		if(index > 0 && index > this.size){
			return;
		}
		if(index === 0){
			this.head = new Node(data,this.head);
			return;
		}
		const node = new Node(data);
		let current,previous;
		current = this.head;
		let count = 0;
		while(count < index){
			previous = current;
			count ++;
			current = current.next;
		}
		node.next = current;
		previous.next = node;
		this.size++;
	}
	getAt(index){
		let current = this.head;
		let count =0;
		while(current){
			if((count == index)){
				console.log('getbyindex ' + current.data);
			}
			count++;
			current = current.next;
		}
		return null;
	}
	removeAt(index){
		if(index > 0 && index > this.size){
			return;
		}
		let current = this.head;
		let previous;
		let count = 0;
		if(index === 0){
			this.head = current.next;
			return;
		}else{
			while(count < index){
			count ++;
			previous = current;
			current  = current.next;
			}

		previous.next = current.next;

		}

		this.size--;
		
	}
	clearList(){
		this.head = null;
		this.size = 0;
	}
	printDataList(){
		let current = this.head;
		while(current){
			console.log(current.data);
			current  = current.next;
		}
	}
}

ll = new linklist();
ll.insertFirstNode(100);
ll.insertFirstNode(200);
ll.insertFirstNode(300);
ll.insertFirstNode(400);
ll.insertLast(500);
// ll.InsertAt(3444,3);
// ll.getAt(3);
ll.removeAt(2)
ll.clearList();
ll.printDataList();

