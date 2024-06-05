"use Client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "../button";
import { Plus } from "lucide-react";
import React, { useState } from "react";

const AddSheet: React.FC<{
  shop_id: string;
  shop_name: string;
  addShopItem: (
    shop_id: string,
    itemName: string,
    shop: string,
    quantity: number
  ) => void;
}> = ({ shop_id, shop_name, addShopItem }) => {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (e: any) => {
    addShopItem(shop_id, item, shop_name, quantity);
    setItem("");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          Add Item <Plus size={15} />
        </Button>
      </SheetTrigger>
      <SheetContent side={"right"} className="py-24">
        <SheetHeader>
          <SheetTitle>Add Item</SheetTitle>
          <SheetDescription>
            Add item to the current shop with the quantity
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Item
            </label>
            <input
              value={item}
              onChange={(e) => setItem(e.target.value)}
              className="col-span-3 bg-neutral-100/40 py-1.5 dark:bg-zinc-900/50 px-2 ml-5 rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4 max-sm:w-fit">
            <label className="text-right">Quantity</label>
            <input
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              type="number"
              className="col-span-3 py-1.5 bg-neutral-100/40 dark:bg-zinc-900/50 px-2 ml-5 rounded-lg w-20"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button onClick={handleSubmit} type="submit">
              Add Item
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default AddSheet;
