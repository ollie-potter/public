import pygame as pg

def scale(value, old_max, old_min, new_max, new_min, inverse=False):
    if maximum == 0: return 0
    if inverse: return round((new_min + (new_max - new_min) * ((value - old_min) / (old_max - old_min))))
    else: return round(255-(new_min + (new_max - new_min) * ((value - old_min) / (old_max - old_min))))
    # effectively the map() function in other languages


red = 0
antiRed = 0
green = 0
antiGreen = 0
blue = 0
antiBlue = 0
waitFor = ''

width=400
height=400
screen = pg.display.set_mode((width,height))
pg.init()

font = pg.font.Font(None, 36) # for drawing text

running = True
while running:
    maximum = max(max(red+antiGreen+antiBlue, green+antiRed+antiBlue), blue+antiGreen+antiRed)
    #print((scale(red, maximum, 0, 0, 255), scale(green, maximum, 0, 0, 255), scale(blue, maximum, 0, 0, 255)))
    screen.fill((scale(red+antiGreen+antiBlue, maximum, 0, 0, 255), scale(green+antiRed+antiBlue, maximum, 0, 0, 255), scale(blue+antiRed+antiGreen, maximum, 0, 0, 255)))
                        # both antigreen & antiblue "add" red            both antired & antiblue "add" green                both antired & antigreen "add" blue
                        # this results in antired = +green +blue, antigreen = +red +blue, antiblue = +red +green

    for e in pg.event.get():
        if e.type == pg.QUIT:
            running = False

        if e.type == pg.KEYDOWN:
            if waitFor != '':
                if e.key in range(48, 58): # number keys 0-9
                    if waitFor == 'r':
                        red = e.key - 48
                    if waitFor == 'g':
                        green = e.key - 48
                    if waitFor == 'b':
                        blue = e.key - 48
                    if waitFor == 'ar':
                        antiRed = e.key - 48
                    if waitFor == 'ag':
                        antiGreen = e.key - 48
                    if waitFor == 'ab':
                        antiBlue = e.key - 48
                    waitFor = ''

            # control which colour is being chosen
            # QWEASD = 113 119 101 97 115 100
            if e.key == 113:
                waitFor = 'r'
            if e.key == 119:
                waitFor = 'g'
            if e.key == 101:
                waitFor = 'b'
            if e.key == 97:
                waitFor = 'ar'
            if e.key == 115:
                waitFor = 'ag'
            if e.key == 100:
                waitFor = 'ab'
            
    if waitFor != '':
        #colour = (scale(red+antiGreen+antiBlue, maximum, 0, 0, 255, True), scale(green+antiRed+antiBlue, maximum, 0, 0, 255, True), scale(blue+antiRed+antiGreen, maximum, 0, 0, 255, True))
        if (scale(red+antiGreen+antiBlue, maximum, 0, 0, 255, True), scale(green+antiRed+antiBlue, maximum, 0, 0, 255, True), scale(blue+antiRed+antiGreen, maximum, 0, 0, 255, True)) == (0, 0, 0):
            colour = (255, 255, 255)
        else: colour = (0, 0, 0)
        if waitFor == 'r':
            pg.draw.circle(screen, colour, (40, 40), 25)
        if waitFor == 'g':
            pg.draw.circle(screen, colour, (width/2, 40), 25)
        if waitFor == 'b':
            pg.draw.circle(screen, colour, (width-40, 40), 25)
        if waitFor == 'ar':
            pg.draw.circle(screen, colour, (40, height-40), 25)
        if waitFor == 'ag':
            pg.draw.circle(screen, colour, (width/2, height-40), 25)
        if waitFor == 'ab':
            pg.draw.circle(screen, colour, (width-40, height-40), 25)

    offset = 10

    pos = (40, 40); pg.draw.circle(screen, (255, 0, 0), pos, 20)
    txt = font.render(str(red), True, (0, 0, 0)); screen.blit(txt, (pos[0]-offset+4, pos[1]-offset))

    pos = (width/2, 40); pg.draw.circle(screen, (0, 255, 0), pos, 20)
    txt = font.render(str(green), True, (0, 0, 0)); screen.blit(txt, (pos[0]-offset+4, pos[1]-offset))

    pos = (width-40, 40); pg.draw.circle(screen, (0, 0, 255), pos, 20)
    txt = font.render(str(blue), True, (0, 0, 0)); screen.blit(txt, (pos[0]-offset+4, pos[1]-offset))

    pos = (40, height-40); pg.draw.circle(screen, (0, 255, 255), pos, 20)
    txt = font.render(str(antiRed), True, (0, 0, 0)); screen.blit(txt, (pos[0]-offset+4, pos[1]-offset))

    pos = (width/2, height-40); pg.draw.circle(screen, (255, 0, 255), pos, 20)
    txt = font.render(str(antiGreen), True, (0, 0, 0)); screen.blit(txt, (pos[0]-offset+4, pos[1]-offset))

    pos = (width-40, height-40); pg.draw.circle(screen, (255, 255, 0), pos, 20)
    txt = font.render(str(antiBlue), True, (0, 0, 0)); screen.blit(txt, (pos[0]-offset+4, pos[1]-offset))


    if (scale(red+antiGreen+antiBlue, maximum, 0, 0, 255), scale(green+antiRed+antiBlue, maximum, 0, 0, 255), scale(blue+antiRed+antiGreen, maximum, 0, 0, 255)) == (255, 255, 255):
        txt = font.render('Colour charge is balanced!', True, (0, 0, 0)); screen.blit(txt, txt.get_rect(center=(width/2, height/2)))

    pg.display.flip()
            


pg.quit()