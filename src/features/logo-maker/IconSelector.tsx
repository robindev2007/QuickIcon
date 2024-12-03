import React, { useContext, useEffect, useState } from "react";
import { IconEditorContext } from "@/context/IconEditorContextProvider";
import NameValueTitle from "./NameValueTitle";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Icon from "@/components/Icon";
import { luIconList } from "@/constant/icons";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDebounce } from "use-debounce";
import { searchIcons } from "@/utils/icon";

function IconSelector() {
  const [icons, setIcons] = useState(luIconList.slice(0, 200));
  const [dialogActive, setDialogActive] = useState(false);
  const [searchParams, setSearchParams] = useState("");
  const [searchParamsDebounce] = useDebounce(searchParams, 10);

  const { iconData, setIconData } = useContext(IconEditorContext);

  const getNewIcons = () => {
    const nextIcons = luIconList.slice(icons.length, icons.length + 200);
    setIcons((prev) => [...prev, ...nextIcons]);
    if (nextIcons.length === 0) {
    }
  };

  useEffect(() => {
    const icons = searchIcons(searchParams);
    if (searchParams.length == 0) {
      setIcons(luIconList.slice(0, 200));
      return;
    }

    setIcons(icons.slice(0, 200));
  }, [searchParamsDebounce]);

  return (
    <div>
      <div className="space-y-1">
        <NameValueTitle name="Icon" value={iconData.icon} />
        <Dialog open={dialogActive} onOpenChange={setDialogActive}>
          <DialogTrigger asChild>
            <Button variant="secondary" size="icon" className="size-12">
              <Icon name={iconData.icon} className="!size-6" />
            </Button>
          </DialogTrigger>
          <DialogContent className="flex h-screen flex-col overflow-hidden sm:max-w-[625px] sm:rounded-none">
            <DialogHeader>
              <DialogTitle>Pick an icon</DialogTitle>

              <DialogDescription>
                <Input
                  value={searchParams}
                  placeholder="Search icons"
                  onChange={(e) => setSearchParams(e.target.value)}
                />
              </DialogDescription>
            </DialogHeader>

            <div
              id="scrollableDiv"
              style={{ height: "100%", overflowY: "auto" }}
            >
              <InfiniteScroll
                dataLength={icons.length}
                hasMore={icons.length < luIconList.length}
                next={getNewIcons}
                loader={<h4></h4>}
                scrollableTarget="scrollableDiv"
                className="grid grid-cols-5 gap-3 pr-2 sm:grid-cols-10 md:grid-cols-10"
              >
                {icons.length > 0 ? (
                  icons.map((icon, index) => (
                    <button
                      onClick={() => {
                        setIconData({ ...iconData, icon: icon });
                        setDialogActive(false);
                      }}
                      className="flex size-12 items-center justify-center rounded-md bg-secondary"
                      key={icon + index}
                    >
                      <Icon name={icon} />
                    </button>
                  ))
                ) : (
                  <div className="col-span-7 w-full">
                    <h2 className="whitespace-nowrap">0 icons found</h2>
                  </div>
                )}
              </InfiniteScroll>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default IconSelector;
