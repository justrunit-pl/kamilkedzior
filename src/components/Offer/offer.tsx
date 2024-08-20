import React, {type ReactNode} from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon, TimerIcon, HandIcon, SunIcon } from '@radix-ui/react-icons';
import clsx from "clsx";

const Tag = ({ label, icon }: {label: string, icon: ReactNode }) => (
    <div className="rounded p-1 border border-gray-300 flex gap-1 items-center">
        {icon}
        <span className="whitespace-nowrap">{label}</span>
    </div>
)

const OfferItem = ({ price, label, description, time }: { price: number, label: string, description: string, time: number}) => (
    <div className="border rounded p-4 flex flex-col gap-4">
        <div className="font-bold flex justify-between gap-4 font-primary items-center">
            <span>{label}</span>
            <div className="flex gap-2">
                <Tag label={`${170} zł`} icon={<HandIcon /> } />
                <Tag label={`${60} min`} icon={<TimerIcon /> } />
            </div>
        </div>
        <div className="font-primary">
            {description}
        </div>
    </div>
)

export const Offer = () => (
    <div className="flex gap-3 flex-wrap">
        <OfferItem
            label="Konsultacja psychoterapeutyczna"
            price={100}
            description="

Cześć, JustRunIt,
w najbliższych tygodniach w Google Play pojawią się nowe opcje personalizacji, które ułatwią Ci kontrolę nad ustawieniami i pozwolą na lepsze zarządzanie danymi w Google Play.
Dzięki personalizacji Sklep Play jest lepiej dopasowany do Twoich oczekiwań oraz ułatwia Ci odkrywanie wciągających gier, przydatnych aplikacji, ciekawych ofert i wielu innych treści, które mogą Cię zainteresować. Dowiedz się więcej o personalizacji w Sklepie Google Play"
            time={70}
        />
        <OfferItem
            label="Konsultacja psychoterapeutyczna"
            price={100}
            description="

Cześć, JustRunIt,
w najbliższych tygodniach w Google Play pojawią się nowe opcje personalizacji, które ułatwią Ci kontrolę nad ustawieniami i pozwolą na lepsze zarządzanie danymi w Google Play.
Dzięki personalizacji Sklep Play jest lepiej dopasowany do Twoich oczekiwań oraz ułatwia Ci odkrywanie wciągających gier, przydatnych aplikacji, ciekawych ofert i wielu innych treści, które mogą Cię zainteresować. Dowiedz się więcej o personalizacji w Sklepie Google Play"
            time={70}
        />
    </div>
)
