function Calculator() {
    this.res = 0;
    this.init = function(num) {this.res = num; return this;};
    this.add = function(num) {this.res+=num; return this;};
    this.sub = function(num) {this.res-=num; return this;};
    this.mul = function(num) {this.res*=num; return this;};
    this.div = function(num) {this.res/=num; return this;};
    this.alert = function() {setTimeout(() => alert(this.res), 5000); return this;};
}