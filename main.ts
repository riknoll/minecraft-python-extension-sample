namespace custom {
    /**
     * This documentation will appear when hovering over the function.
     * CamelCase names are automatically converted into snake_case in
     * Python, so in Python this will be referenced as custom.say_hello
     *
     * @param name the name to say
     */
    export function sayHello(name: string) {
        player.say(`Hello there, ${name}!`);
    }

    /**
     * If the function is only going to be used in Python, you can
     * also just write the name in snake_case
     *
     * @param someNumber a number
     */
    export function snake_case_also_works(someNumber: number) {
        return someNumber;
    }
}
