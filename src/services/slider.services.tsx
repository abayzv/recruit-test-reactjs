interface sliderItem {
    title: string;
    url: string;
}

interface SliderData extends Array<sliderItem> { }

export type {
    SliderData,
    sliderItem
}