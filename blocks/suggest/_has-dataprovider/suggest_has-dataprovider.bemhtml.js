block('suggest').match(function() { return this.mods['has-dataprovider']; }).js()(function() {
    var prevJs = applyNext();
    return prevJs && prevJs !== true? this.extend(prevJs, this.ctx.dataprovider) : this.ctx.dataprovider;
})
