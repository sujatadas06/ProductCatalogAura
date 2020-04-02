({
	doInit : function(component, event, helper) {
		var action = component.get("c.getProducts");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if(state==="SUCCESS") {
                var result = response.getReturnValue();
                component.set("v.ProductList",result);
            }
        });
        $A.enqueueAction(action);
	},
    addToCart : function(component, event, helper) {
		//firing Application events
        var appEvent = $A.get("e.c:AddToCartEvent");
        console.log('hi == '+JSON.stringify(event.getSource().get("v.value")));
        appEvent.setParams({"AddedProduct" : event.getSource().get("v.value")});
        appEvent.fire();
	}
})