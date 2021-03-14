var houseBlueprint = {
    address: '',
    date: '',
    description: '',
    owner: '',
    size: 0,
    getDaysToBuild: function(){
        return this.size/this._averageBuildSpeed;
    }
};

function HouseBuilder(address, description, owner, size, roomCount) {
    this.address = address;
    this.description = description;
    this.date = new Date,
    this.owner = owner;
    this.size = size;
    this._averageBuildSpeed = 0.5;
    this.roomCount = roomCount;
}

HouseBuilder.prototype = houseBlueprint;