const {
    Client,
    MessageEmbed,
    Message
} = require('discord.js');
const client = new Client({
    disableEveryone: true
});
const {
    token,
    prefix
} = require('./config.json');
const kolory = require('./kolory.json');

client.on('warn', console.warn);

client.on('error', console.error);

client.on("ready", () => {
    console.log(` >> ${client.user.tag} << z id >> ${client.user.id} <<`);
    let activities = [`Zapraszamy na wyspę!`, `NegrosRP`, `${prefix}help`],
        i = 0;
    setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "PLAYING"
    }), 100000);

});


client.on('message', message => {

    if (message.content.startsWith(`${prefix}help`)) {
        const discordEmbed = new MessageEmbed()
            .setTitle('Szukasz pomocy?')
            .setColor('#00a6ff')
            .setDescription('Cześć, zauważyłem, że potrzebujesz pomocy, prawda? Świetnie się składa!')
            .addField('Pomoc z wyspą?', '<@273841519654600704> / <@475630071231676416>', true)
            .addField('Problem z botem?', '<@190755326637768704>', true)
            .addField('Techniczna pomoc (serwer Discord)', 'https://discord.gg/8ABJZPj', false)
            .addField('`Lista komend`', '**?komendy**')
            .setFooter('NegrosRP | Kazik#2642');
        return message.channel.send(discordEmbed);
    }

    if (message.content.startsWith(`${prefix}invite`)) {
        const polakEmbed = new MessageEmbed()
            .setColor("RED")
            .setFooter('NegrosRP | Kazik#2642')
            .addField('**Zaproszenie na nasz Discord:**', 'https://discord.gg/BCpvgMR')
        return message.channel.send(polakEmbed);


    }

    if (message.content.startsWith(`${prefix}czarny`)) {
        if (message.author.id === ('273841519654600704') || ('475630071231676416') || ('444569590022930452') || ('327193351420117002') || ('432237603996041219') || ('454401638728204288') || ('434092026917552129') || ('306138162235965440') || ('190755326637768704') || ('706550930300207118')) {
            const czarnyEmbed = new MessageEmbed()
                .setTitle('❗ Zmieniono poziom zagrożenia na wyspie! ❗')
                .setDescription('`「🚔」 LSPD`  wprowadza na ten moment\n\n' +

                    '```kod czarny na wyspę!```\n\n' +


                    'Prosimy o pozostanie w domach!\n\n' +

                    '`Uważajcie na siebie!`\n' +
                    '*Pozdrawia **Zarząd LSPD***')
                .setColor("BLACK")
                .setFooter('NegrosRP | Kazik#2642');
            return message.channel.send(czarnyEmbed).then(message.channel.send('@here'));
        } else {
            const bladEmbed = new MessageEmbed()
                .setDescription('Nie jesteś z administracji!')
                .setFooter('NegrosRP | Kazik#2642');
            return message.channel.send(bladEmbed);
        }
    }

    if (message.content.startsWith(`${prefix}zielony`)) {
        if (message.author.id === ('273841519654600704') || ('475630071231676416') || ('444569590022930452') || ('327193351420117002') || ('432237603996041219') || ('454401638728204288') || ('434092026917552129') || ('306138162235965440') || ('190755326637768704') || ('706550930300207118')) {
            const zielonyEmbed = new MessageEmbed()
                .setTitle('❗ Zmieniono poziom zagrożenia na wyspie! ❗')
                .setDescription('`「🚔」 LSPD`  wprowadza na ten moment\n\n' +

                    '```kod zielony na wyspę!```\n\n' +


                    '*Pozdrawia **Zarząd LSPD***')
                .setColor("GREEN")
                .setFooter('NegrosRP | Kazik#2642');
            return message.channel.send(zielonyEmbed).then(message.channel.send('@here'));
        } else {
            const bladEmbed = new MessageEmbed()
                .setDescription('Nie jesteś z administracji!')
                .setFooter('NegrosRP | Kazik#2642');
            return message.channel.send(bladEmbed);
        }
    }

    if (message.content.startsWith(`${prefix}komendy`)) {
        const komendyEmbed = new MessageEmbed()
            .setTitle('🥶 Komendy 🥶')

            .addField('`Komendy dla każdego:`', '?help\n' +

                '?invite\n' +
                '?zagrożenie\n' +
                '?ip\n' + 
                '?dw\n' + 
                '?propozycja\n')

            .addField('`Komendy dla administratorów:`', '?czarny\n' +
                '?zielony\n' +
                '?ban <@użytkownik>\n' +
                '?kick <@użytkownik>\n' +
                '?accept <@użytkownik>\n' +
                '?odrzucam <@użytkownik>\n')
            .addField('`🧙‍♂️🤫`', '?magic')
            .setColor("RANDOM")
            .setFooter('NegrosRP | Kazik#2642');
        return message.channel.send(komendyEmbed);
    }
    if (message.content.startsWith(`${prefix}zagrożenie`)) {
        const zagrozenieEmbed = new MessageEmbed()
            .setFooter('NegrosRP| Kazik#2642')
            .setDescription('Żeby zmienić poziom zagrożenia na wyspie wystarczy napisać na kanale <#714773183777210388> odpowiednio: \n\n' +
                '`?zielony`\n' +

                '`?czarny`\n\n' +


                'Osoby upoważnione do zmiany poziomu zagrożenia:')
            .addField('id: *273841519654600704*', '<@273841519654600704>')
            .addField('id: *475630071231676416*', '<@475630071231676416>')
            .addField('id: *444569590022930452*', '<@444569590022930452>')
            .addField('id: *327193351420117002*', '<@327193351420117002>')
            .addField('id: *432237603996041219*', '<@432237603996041219>')
            .addField('id: *454401638728204288*', '<@454401638728204288>')
            .addField('id: *434092026917552129*', '<@434092026917552129>')
            .addField('id: *306138162235965440*', '<@306138162235965440>')
            .addField('id: *706550930300207118*', '<@706550930300207118>')
            .addField('`Jakaś osoba została pominięta?`', 'Napisz do : <@190755326637768704>!');
        return message.channel.send(zagrozenieEmbed);




    }

    if (message.content.startsWith(`${prefix}ban`)) {
        const banbladEmbed = new MessageEmbed()
            .setFooter('NegrosRP | Kazik#2642')
            .setDescription('**Nie posiadasz** następujących permisji potrzebnych do zbanowania: \n\n' +


                "`BANOWANIE CZŁONKÓW` - `BAN MEMBERS`")
            .setColor("RED");

        const banblad2Embed = new MessageEmbed()
            .setFooter('NegrosRP | Kazik#2642')
            .setDescription('**Nie posiadam** następujących permisji potrzebnych do zbanowania: \n\n' +


                "`BANOWANIE CZŁONKÓW` - `BAN MEMBERS`")
            .setColor("RED");
        if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) { return message.channel.send(banbladEmbed); }

        if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) { return message.channel.send(banblad2Embed); }
        const pingbladEmbed = new MessageEmbed()
            .setFooter('NegrosRP | Kazik#2642')
            .setDescription('Musisz oznaczyć użytkownika, żeby go zbanować!')
            .setColor("RED");
        if (message.mentions.users.size === 0) { return message.channel.send(pingbladEmbed); }
        let banMember = message.guild.member(message.mentions.users.first());
        const banmemberbladEmbed = new MessageEmbed()
            .setFooter('NegrosRP | Kazik#2642')
            .setDescription('Nie udało się znaleźć takiego użytkownika!')
            .setColor("RED");
        if (!banMember) { return message.channel.send(banmemberbladEmbed); }

        banMember.ban().then((member) => {
            //            message.channel.send(member.displayName + " has left the server")
            const appprovedEmbed = new MessageEmbed()
                .setFooter('NegrosRP | Kazik#2642')
                .setDescription(`**${member.displayName}** został pomyślnie zbanowany przez **${message.author}**`)
                .setColor("BLACK");

            message.channel.send(appprovedEmbed);
        })
    }

    if (message.content.startsWith(`${prefix}kick`)) {
        const kickbladEmbed = new MessageEmbed()
            .setFooter('NegrosRP | Kazik#2642')
            .setDescription('**Nie posiadasz** następujących permisji potrzebnych do wyrzucenia: \n\n' +


                "`WYRZUCANIE CZŁONKÓW` - `KICK MEMBERS`")
            .setColor("RED");

        const kickblad2Embed = new MessageEmbed()
            .setFooter('NegrosRP | Kazik#2642')
            .setDescription('**Nie posiadam** następujących permisji potrzebnych do wyrzucenia: \n\n' +


                "`WYRZUCANIE CZŁONKÓW` - `KICK MEMBERS`")
            .setColor("RED");
        if (!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) {
            return message.channel.send(kickbladEmbed);
        }

        if (!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) {
            return message.channel.send(kickblad2Embed);
        }
        const ping2bladEmbed = new MessageEmbed()
            .setFooter('NegrosRP | Kazik#2642')
            .setDescription('Musisz oznaczyć użytkownika, żeby go wyrzucić!')
            .setColor("RED");
        if (message.mentions.users.size === 0) {
            return message.channel.send(ping2bladEmbed);
        }
        let kickMember = message.guild.member(message.mentions.users.first());
        const kickmemberbladEmbed = new MessageEmbed()
            .setFooter('NegrosRP | Kazik#2642')
            .setDescription('Nie udało się znaleźć takiego użytkownika!')
            .setColor("RED");
        if (!kickMember) {
            return message.channel.send(kickmemberbladEmbed);
        }

        kickMember.kick().then((member) => {
            //            message.channel.send(member.displayName + " has left the server")
            const appproved1Embed = new MessageEmbed()
                .setFooter('NegrosRP | Kazik#2642')
                .setDescription(`**${member.displayName}** został pomyślnie wyrzucony przez **${message.author}**`)
                .setColor("YELLOW");

            message.channel.send(appproved1Embed);
        })
    }

    if (message.content.startsWith(`${prefix}accept`)) {
        const acceptbladEmbed = new MessageEmbed()
            .setFooter('NegrosRP | Kazik#2642')
            .setDescription('**Nie posiadasz** następujących permisji potrzebnych do akceptowania podań: \n\n' +


                "`ZARZĄDZANIE WIADOMOŚCIAMI` - `MANAGE MESSAGES`")
            .setColor("RED");

        const acceptblad2Embed = new MessageEmbed()
            .setFooter('NegrosRP | Kazik#2642')
            .setDescription('**Nie posiadam** następujących permisji potrzebnych do wyrzucenia: \n\n' +


                "`ZARZĄDZANIE WIADOMOŚCIAMI` - `MANAGE MESSAGES`")
            .setColor("RED");
        if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) {
            return message.channel.send(acceptbladEmbed);
        }

        if (!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) {
            return message.channel.send(acceptblad2Embed);
        }
        const ping3bladEmbed = new MessageEmbed()
            .setFooter('NegrosRP | Kazik#2642')
            .setDescription('Musisz oznaczyć użytkownika, żeby przyjąć jego podanie!')
            .setColor("RED");
        if (message.mentions.users.size === 0) {
            return message.channel.send(ping3bladEmbed);
        }
        let acceptMember = message.guild.member(message.mentions.users.first());
        const acceptmemberbladEmbed = new MessageEmbed()
            .setFooter('NegrosRP | Kazik#2642')
            .setDescription('Nie udało się znaleźć takiego użytkownika!')
            .setColor("RED");
        if (!acceptMember) {
            return message.channel.send(acceptmemberbladEmbed);
        }

        const member = message.member;
        //            message.channel.send(member.displayName + " has left the server")
        const appproved1Embed = new MessageEmbed()
            .setFooter('NegrosRP | Kazik#2642')
            .setTitle('✅ Podanie rozpatrzone pozytywnie! \n')

            .setDescription(`Podanie **${acceptMember}** zostało rozpatrzone\n\n` +

                "`POZYTYWNIE`\n\n" +


                `Administrator sprawdzający podanie: *${message.author}*\n\n`)
            .setColor("GREEN");

        message.channel.send(appproved1Embed);
        message.delete();

    };

    if (message.content.startsWith(`${prefix}odrzucam`)) {
        const rejectbladEmbed = new MessageEmbed()
            .setFooter('NegrosRP | Kazik#2642')
            .setDescription('**Nie posiadasz** następujących permisji potrzebnych do odrzucania podań: \n\n' +


                "`ZARZĄDZANIE WIADOMOŚCIAMI` - `MANAGE MESSAGES`")
            .setColor("RED");

        const rejectblad2Embed = new MessageEmbed()
            .setFooter('NegrosRP | Kazik#2642')
            .setDescription('**Nie posiadam** następujących permisji potrzebnych do odrzucania: \n\n' +


                "`ZARZĄDZANIE WIADOMOŚCIAMI` - `MANAGE MESSAGES`")
            .setColor("RED");
        if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) {
            return message.channel.send(rejectbladEmbed);
        }

        if (!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) {
            return message.channel.send(rejectblad2Embed);
        }
        const ping4bladEmbed = new MessageEmbed()
            .setFooter('NegrosRP | Kazik#2642')
            .setDescription('Musisz oznaczyć użytkownika, żeby odrzucić jego podanie!')
            .setColor("RED");
        if (message.mentions.users.size === 0) {
            return message.channel.send(ping4bladEmbed);
        }
        let rejectMember = message.guild.member(message.mentions.users.first());
        const rejectmemberbladEmbed = new MessageEmbed()
            .setFooter('NegrosRP | Kazik#2642')
            .setDescription('Nie udało się znaleźć takiego użytkownika!')
            .setColor("RED");
        if (!rejectMember) {
            return message.channel.send(rejectmemberbladEmbed);
        }

        const rejected1Embed = new MessageEmbed()
            .setFooter('NegrosRP | Kazik#2642')
            .setTitle('❌ Podanie rozpatrzone negatywnie! \n')

            .setDescription(`Podanie **${rejectMember}** zostało rozpatrzone\n\n` +

                "`NEGATYWNIE`\n\n" +


                `Administrator sprawdzający podanie: *${message.author}*\n\n`)
            .setColor("RED");

        message.channel.send(rejected1Embed);
        message.delete();

    };

    if (message.content.startsWith(`${prefix}ip`)) {
        const ipEmbed = new MessageEmbed()
            .setFooter('NegrosRP | Kazik#2642')
            .addField('**IP WYSPY**', '`51.83.173.156:30120`')
            .addField('*Zalecane użycie!*', '**F8 ➡ connect [ip]**');
        return message.channel.send(ipEmbed);
    }

});

//dołączanie do serwera 

client.on(`guildMemberAdd`, async member => {
    var channel = member.guild.channels.cache.find(channel => channel.id === '706588162901671989')
    var role = member.guild.roles.cache.find(r => r.id === '706588162717384820')
    member.roles.add(role)
    if (!role) console.log('Nie udało się znaleźć roli!');
    if (!channel) return undefined;
    let siemkaEmbed = new MessageEmbed();
    siemkaEmbed.setTitle(`Witamy!`);
    siemkaEmbed.setColor("GREEN");
    siemkaEmbed.setDescription(`Witaj ${member}, na serwerze **NegrosRP!**
    
    Przeczytaj regulamin! <#706588163149267036>
    
    Zachęcamy do pisania podań na 
    🔫 Organizację
    🚔 LSPD
    🔧 LSC 
    🚑 EMS!`);
    siemkaEmbed.setFooter(`NegrosRP | Kazik#2642`, client.user.displayAvatarURL);
    return channel.send(siemkaEmbed);
});

//opuszczanie serwera 

client.on('guildMemberRemove', async member => {
    const channel = member.guild.channels.cache.find(channel => channel.id === '706588162901671989')
    if (!channel) return undefined;
    let narkaEmbed = new MessageEmbed();
    narkaEmbed.setTitle(`Żegnamy!`);
    narkaEmbed.setColor("GREY");
    narkaEmbed.setDescription(`${member} zdecydował, że nas opuszcza. Mamy nadzieję, że kiedyś się tutaj jeszcze zobaczymy!`);
    narkaEmbed.setFooter(`NegrosRP | Kazik#2642`, client.user.displayAvatarURL);
    return channel.send(narkaEmbed);
});

//darkweb


client.on('message', async message => {

    //introduction
    if (message.content.startsWith(`${prefix}introduction`)) {
        let startEmbed = new MessageEmbed()
            .addField("@anonymous: ", "Witam wszystkich obywateli i przyjezdnych! Z tej strony Naczelny Hacker Wyspowicz! 🕵️‍♂️ Chcecie być tak samo anonimowi jak ja? Nic w tym trudnego nie ma! Psst... Dostałem cynk, że <@714559507132580010> ma tam coś nowego pod bluzą.. Sprawdźcie sami 🤫 `?komendy`")
            .setFooter('💻DarkWEB System v1.0 | Kazik#2642')
        let introductionChannel = client.channels.cache.get('714773214294704148')
        introductionChannel.send(startEmbed);
    }

    //clear darkweb

    if (message.content.startsWith(`${prefix}dw`)) {

        if (message.channel.type !== 'dm') {

            let dmEmbed = new MessageEmbed()
                .setDescription('Użyj tej komendy w wiadomości prywatnej do <@714559507132580010>! Zapobiega to metagamingowi!')
                .setFooter('💻 DarkWEB System v1.0 | Kazik#2642')
            message.author.send(dmEmbed);
            message.delete();

        }


        else {

            let propozycjaEmbed = new MessageEmbed();
            propozycjaEmbed.setDescription('```Napisz swojego anonimowego tweeta:```');
            propozycjaEmbed.setFooter("💻 DarkWEB System v1.0 | Kazik#2642")
            propozycjaEmbed.setColor(kolory.black);

            message.author.send(propozycjaEmbed);


            let filter = m => !m.author.bot;
            const collector = message.channel.createMessageCollector(filter, { time: 15000 });

            let counter = 0;
            let destination = client.channels.cache.get('714773214294704148');

            collector.on('collect', (message, col) => {
                console.log("Skolekcjonowana wiadomość: " + message.content);
                counter++;
                if (counter === 1) collector.stop();
                if (destination) {
                    if (message.content.startsWith(`${prefix}colstop`) && (message.author.id === m.author.id)) {
                        console.log('Zatrzymuję >> collector <<');
                        collector.stop();
                    }
                    const anonymousEmbed = new MessageEmbed()
                        .addField('@anonymous:', `${message.content}`)
                        .setFooter('💻DarkWEB System v1.0');
                    destination.send(anonymousEmbed);
                }

            });
            collector.on('end', collected => {
                console.log(collected.size);

            });
        };
    };
});

//darkweb admin


client.on('message', async message => {

    //clear darkweb

    if (message.content.startsWith(`${prefix}admin_dw123`)) {

        if (message.channel.type !== 'dm') {

            let dmEmbed = new MessageEmbed()
                .setDescription('Użyj tej komendy w wiadomości prywatnej do <@714559507132580010>! Zapobiega to metagamingowi!')
                .setFooter('💻 DarkWEB System v1.0 | Kazik#2642')
            message.author.send(dmEmbed);
            message.delete();

        }


        else {

            let propozycjaEmbed = new MessageEmbed();
            propozycjaEmbed.setDescription('```Napisz swojego anonimowego tweeta:```');
            propozycjaEmbed.setFooter("💻 DarkWEB System v1.0 | Kazik#2642")
            propozycjaEmbed.setColor(kolory.black);

            message.author.send(propozycjaEmbed);


            let filter = m => !m.author.bot;
            const collector = message.channel.createMessageCollector(filter, { time: 15000 });

            let counter = 0;
            let destination = client.channels.cache.get('714773214294704148');

            collector.on('collect', (message, col) => {
                console.log("Skolekcjonowana wiadomość: " + message.content);
                counter++;
                if (counter === 1) collector.stop();
                if (destination) {
                    if (message.content.startsWith(`${prefix}colstop`) && (message.author.id === m.author.id)) {
                        console.log('Zatrzymuję >> collector <<');
                        collector.stop();
                    }
                    const anonymousEmbed = new MessageEmbed()
                        .addField('🧅TOR System', '[Powered by TOR System](https://www.torproject.org/download/) ')
                        .addField('Administrator 💻 DarkWEB System', `${message.content}`)
                        .setFooter('💻DarkWEB System v1.0');
                    destination.send(anonymousEmbed);
                }

            });
            collector.on('end', collected => {
                console.log(collected.size);

            });
        };
    };
});

//propozycja

client.on('message', async message => {

    //propozycja

    if (message.content.startsWith(`${prefix}propozycja`)) {

        if (message.channel.type !== 'dm') {

            let dmEmbed = new MessageEmbed()
                .setDescription('Użyj tej komendy w wiadomości prywatnej do <@714559507132580010>! Nie robisz wtedy syfu na kanale oraz jest to dla mnie czytelniejsze!')
                .setFooter('🥶 Ice Tray | Kazik#2642')
            message.author.send(dmEmbed);
            message.delete();

        }


        else {

            let propozycjaEmbed = new MessageEmbed();
            propozycjaEmbed.setDescription('```Napisz swoją propozycję: ```');
            propozycjaEmbed.setFooter("🥶 Ice Tray | Kazik#2642")
            propozycjaEmbed.setColor(kolory.ice);

            message.author.send(propozycjaEmbed);


            let filter = m => !m.author.bot;
            const collector = message.channel.createMessageCollector(filter, { time: 15000 });
            const author = client.users.cache.get("190755326637768704")
            let counter = 0;

            collector.on('collect', (message, col) => {
                console.log("Skolekcjonowana wiadomość: " + message.content);
                counter++;
                if (counter === 1) collector.stop();
                if (author) {
                    if (message.content.startsWith(`${prefix}colstop`) && (message.author.id === m.author.id)) {
                        console.log('Zatrzymuję >> collector <<');
                        collector.stop();
                    }
                    const anonymousEmbed = new MessageEmbed()
                        .addField(`id: ${message.author}`, `Osoba: ${message.author}`)
                        .setDescription("```Nowa propozycja!```\n\n"
                            + "A brzmi:\n"
                            + `**${message.content}**\n\n`)

                        .setFooter('🥶 Ice Tray');
                    const thenEmbed = new MessageEmbed()
                        .addField("🥶 Cool Squad 🥶", "`Dziękujemy za propozycję!` <:CoolYou:716354319238037728>\n\n" +

                            "Mamy nadzieję, że bot służy jak najlepiej! Z pozdrowieniami! <:CoolSquad:716354295426973797>\n")
                        .setColor(kolory.ice)
                        .setFooter('🥶 Ice Tray');

                    author.send(anonymousEmbed)
                        .then(message.author.send(thenEmbed));
                }

            });
            collector.on('end', collected => {
                console.log(collected.size);

            });
        };
    };
});

//magia

client.on('message', async message => {

    if (message.content.startsWith(`${prefix}magic`)) {

        if (message.channel.type !== 'dm') {

            let dmEmbed = new MessageEmbed()
                .setDescription('Użyj tej komendy w wiadomości prywatnej do <@714559507132580010>! Nie zdradzaj innym, że magia istnieje!')
                .setFooter('🥶 Ice Tray | Kazik#2642')
            message.author.send(dmEmbed);
            message.delete();

        }


        else {

            let propozycjaEmbed = new MessageEmbed();
            propozycjaEmbed.setDescription('Witamy. Z tej strony IceTray Squad. Dziękujemy za zainteresowanie komendą `?magic`.');
            propozycjaEmbed.addField("`CO DALEJ?`", "[KLIKNIJ TUTAJ](https://discord.io/coolsquad) a następnie udaj się do kanału oznaczonego jako magia i do osoby przypiętej na tej kanale napisz: `c.hagrid` i sam zobaczysz 🙈🧙‍♂️");
            propozycjaEmbed.setFooter("🥶 Ice Tray | Kazik#2642")
            propozycjaEmbed.setColor(kolory.ice);

            message.author.send(propozycjaEmbed);

        };
    };
});




client.login(process.env.token);

