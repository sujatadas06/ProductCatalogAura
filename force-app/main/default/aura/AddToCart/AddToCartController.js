({
	getSelectedProduct : function(component, event, helper) {
		var selectedProduct = event.getParam("AddedProduct");
        var selectedItems = component.get("v.SelectedProduct");
        selectedItems.push(selectedProduct);
        component.set("v.SelectedProduct",selectedItems);
	},
    removeFromCart : function(component, event, helper) {
		var itemToRemove = event.getSource().get("v.value");
        var selectedItems = component.get("v.SelectedProduct");
        selectedItems.pop(itemToRemove);
        component.set("v.SelectedProduct",selectedItems);
	},
    handleLoad : function(component, event, helper) {
        
	},
    handleSubmit : function(component, event, helper) {
        component.find("form").submit();
        console.log('record ');
		var record = event.getParam("response");
        console.log('record '+record.id);
	},
    checkout : function(component, event, helper) {
		component.find("form").submit();
	}
})