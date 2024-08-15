import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon, TimerIcon, HandIcon } from '@radix-ui/react-icons';
import clsx from "clsx";

const OfferItem = ({ header, content, price, time }: { header: string, content: string, price: string, time: string }) => {
    return (
        <AccordionItem value={header}>
            <AccordionTrigger>
                <div className="w-full flex justify-between items-center gap-4">
                    <h3 className="uppercase">{header}</h3>
                    <div className="flex gap-2">
                        <span className="border p-2 rounded flex gap-2">
                            <HandIcon/>
                            <span>{price}</span>
                        </span>
                        <span className="border p-2 rounded flex gap-2">
                            <TimerIcon/>
                            <span>{time}</span>
                        </span>
                    </div>
                </div>
            </AccordionTrigger>
            <AccordionContent>
                <p>{content}</p>
            </AccordionContent>
        </AccordionItem>
    )
}

export const Offer = () => (
    <Accordion.Root
        className="bg-mauve6 w-[50rem] rounded-md shadow-[0_2px_10px] shadow-black/5"
        type="single"
        defaultValue="item-1"
        collapsible
    >

        <OfferItem
            header="Konsultacja psychoterapeutyczna"
            content="To przeważnie 1-3 spotkania z terapeutą. Ich celem jest przyjrzenie się problemom z jakimi boryka się klient/ka, określenie formy pomocy oraz ram czasowych. To także okazja byś sprawdził/a czy jestem odpowiednią osobą dla Ciebie do towarzyszenia Ci w Twoim rozwoju. Sesja trwa 50 minut i odbywa się raz w tygodniu."
            price="170 zł"
            time="50 min."
        />

        <AccordionItem value="item-2">
            <AccordionTrigger>Is it unstyled?</AccordionTrigger>
            <AccordionContent>
                Yes. It's unstyled by default, giving you freedom over the look and feel.
            </AccordionContent>
        </AccordionItem>

        <Accordion.Item value="item-3">
            <AccordionTrigger>Can it be animated?</AccordionTrigger>
            <AccordionContent>
                Yes! You can animate the Accordion with CSS or JavaScript.
            </AccordionContent>
        </Accordion.Item>
    </Accordion.Root>
);

const AccordionItem = React.forwardRef(({ children, className, ...props }: Accordion.AccordionItemProps, forwardedRef) => (
    <Accordion.Item
        className={clsx(
            'focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]',
            className
        )}
        {...props}
        ref={forwardedRef}
    >
        {children}
    </Accordion.Item>
));

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
        <Accordion.Trigger
            className={clsx(
                'text-violet11 shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none',
                className
            )}
            {...props}
            ref={forwardedRef}
        >
            {children}
            <ChevronDownIcon
                className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                aria-hidden
            />
        </Accordion.Trigger>
    </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
        className={clsx(
            'text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]',
            className
        )}
        {...props}
        ref={forwardedRef}
    >
        <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
));
