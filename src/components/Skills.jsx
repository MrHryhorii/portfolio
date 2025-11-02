import React from 'react';

import {
    SiTypescript,
    SiCss3,
    SiPython, 
    SiLua, 
    SiJavascript,
    SiCplusplus,
    SiNodedotjs,
    SiMysql,
    SiMongodb,
    SiLaravel,
    SiGamemaker,
    SiBlender,
    SiUnity,
    SiGodotengine,
    SiKrita,
    SiLibreoffice,
    SiUbuntu,
    SiNpm,
    SiSass,
    SiGithub,
    SiJest,
    SiFigma,
    SiVercel,
    SiMarkdown,
    SiJson,
    SiXml,
    SiRenpy,
    SiBootstrap,
    SiRedux,
    SiPhp,
    } from 'react-icons/si'; // Simple Icons (Si)
import {
    DiReact,
    DiHtml5,
    DiDotnet,
    } from 'react-icons/di'; // Devicons (Di)
import {
    FaGitAlt,
    FaPaintBrush,
    FaFileWord,
    FaServer, // ASP.NET
    FaSitemap, // MVC
    FaLightbulb, // SOLID
    FaRecycle, // DRY
    FaMagic, // KISS
    FaHeart, // LÖVE2D
    } from 'react-icons/fa'; // Font Awesome (Fa)
import {
    FcPicture,
    } from 'react-icons/fc';
import {
    IoIosColorPalette,
    } from 'react-icons/io'; // Ion Icons (Io)
import {
    IoBookSharp, // Pascal
    } from 'react-icons/io5'; // Ion Icons (Io5)
import {
    VscVscode,
    } from 'react-icons/vsc';


const Skills = () => {
    const iconSize = 39;
    const iconColor = "#F0F5FF";

    return (
        <section style={
            {
                padding: 0,
                borderRadius: 0
            }
        }>
            <div style={
                { 
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 'clamp(0.7rem, calc(0.7rem + ((100vw - 500px)/10) * 0.2), 1rem)', 
                    flexWrap: 'wrap' 
                }
            }>
            
                {/* ==================================== */}
                {/* 1. KEY (CORE ROLE) */}
                {/* ==================================== */}

                {/* React */}
                <div style={{ textAlign: 'center' }}>
                    <DiReact size={iconSize} color="#61DAFB" /> 
                    <p>React</p>
                </div>

                {/* TypeScript */}
                <div style={{ textAlign: 'center' }}>
                    <SiTypescript size={iconSize} color="#3178C6" />
                    <p>TypeScript</p>
                </div>

                {/* HTML5 */}
                <div style={{ textAlign: 'center' }}>
                    <DiHtml5 size={iconSize} color="#E34F26" />
                    <p>HTML5</p>
                </div>

                {/* CSS3 */}
                <div style={{ textAlign: 'center' }}>
                    <SiCss3 size={iconSize} color="#1572B6" />
                    <p>CSS3</p>
                </div>
                
                {/* Sass/SCSS */}
                <div style={{ textAlign: 'center' }}>
                    <SiSass size={iconSize} color="#CC6699" />
                    <p>Sass/SCSS</p>
                </div>

                {/* JavaScript */}
                <div style={{ textAlign: 'center' }}>
                    <SiJavascript size={iconSize} color="#F7DF1E" />
                    <p>JavaScript</p>
                </div>

                {/* Git */}
                <div style={{ textAlign: 'center' }}>
                    <FaGitAlt size={iconSize} color="#F05032" />
                    <p>Git</p>
                </div>

                {/* Bootstrap */}
                <div style={{ textAlign: 'center' }}>
                    <SiBootstrap size={iconSize} color="#7952B3" />
                    <p>Bootstrap</p>
                </div>

                {/* Redux */}
                <div style={{ textAlign: 'center' }}>
                    <SiRedux size={iconSize} color="#764ABC" />
                    <p>Redux</p>
                </div>

                {/* ==================================== */}
                {/* 2. BACKEND / LANGUAGES */}
                {/* ==================================== */}

                {/* Node.js */}
                <div style={{ textAlign: 'center' }}>
                    <SiNodedotjs size={iconSize} color="#339933" />
                    <p>Node.js</p>
                </div>

                {/* Laravel */}
                <div style={{ textAlign: 'center' }}>
                    <SiLaravel size={iconSize} color="#FF2D20" />
                    <p>Laravel</p>
                </div>

                {/* PHP */}
                <div style={{ textAlign: 'center' }}>
                    <SiPhp size={iconSize} color="#777BB4" />
                    <p>PHP</p>
                </div>

                {/* C# */}
                <div style={{ textAlign: 'center' }}>
                    <DiDotnet size={iconSize} color="#239120" /> 
                    <p>C#</p>
                </div>

                {/* .NET */}
                <div style={{ textAlign: 'center' }}>
                    <DiDotnet size={iconSize} color="#512BD4" /> 
                    <p>.NET</p>
                </div>
                
                {/* ASP.NET Core */}
                <div style={{ textAlign: 'center' }}>
                    <FaServer size={iconSize} color="#512BD4" />
                    <p>ASP.NET</p>
                </div>

                {/* Python */}
                <div style={{ textAlign: 'center' }}>
                    <SiPython size={iconSize} color="#3776AB" />
                    <p>Python</p>
                </div>

                {/* C++ */}
                <div style={{ textAlign: 'center' }}>
                    <SiCplusplus size={iconSize} color="#00599C" />
                    <p>C++</p>
                </div>

                {/* Lua */}
                <div style={{ textAlign: 'center' }}>
                    <SiLua size={iconSize} color="#2C2D72" />
                    <p>Lua</p>
                </div>

                {/* Pascal (old language) */}
                <div style={{ textAlign: 'center' }}>
                    <IoBookSharp size={iconSize} color="#FF6F00" /> 
                    <p>Pascal</p>
                </div>

                {/* ==================================== */}
                {/* 3. DATABASES */}
                {/* ==================================== */}

                {/* MySQL */}
                <div style={{ textAlign: 'center' }}>
                    <SiMysql size={iconSize} color="#4479A1" />
                    <p>MySQL</p>
                </div>

                {/* MongoDB */}
                <div style={{ textAlign: 'center' }}>
                    <SiMongodb size={iconSize} color="#47A248" />
                    <p>MongoDB</p>
                </div>


                {/* ==================================== */}
                {/* 4. GAMEDEV / GRAPHICS*/}
                {/* ==================================== */}

                {/* Unity */}
                <div style={{ textAlign: 'center' }}>
                    <SiUnity size={iconSize} color="#222C37" />
                    <p>Unity</p>
                </div>

                {/* Godot */}
                <div style={{ textAlign: 'center' }}>
                    <SiGodotengine size={iconSize} color="#478CBF" />
                    <p>Godot</p>
                </div>

                {/* GML (GameMaker Language) */}
                <div style={{ textAlign: 'center' }}>
                    <SiGamemaker size={iconSize} color={iconColor} />
                    <p>GML</p>
                </div>

                {/* Ren'Py */}
                <div style={{ textAlign: 'center' }}>
                    <SiRenpy size={iconSize} color="#FF7F7F" />
                    <p>Ren'Py</p>
                </div>

                {/* LÖVE2D */}
                <div style={{ textAlign: 'center' }}>
                    <FaHeart size={iconSize} color="#E42C4C" />
                    <p>LÖVE2D</p>
                </div>

                {/* Blender */}
                <div style={{ textAlign: 'center' }}>
                    <SiBlender size={iconSize} color="#F5792A" />
                    <p>Blender</p>
                </div>

                {/* Krita */}
                <div style={{ textAlign: 'center' }}>
                    <SiKrita size={iconSize} color="#3C5C7A" />
                    <p>Krita</p>
                </div>

                {/* ==================================== */}
                {/* 5. QUALITY & DEVOPS */}
                {/* ==================================== */}

                {/* Jest (Testing) */}
                <div style={{ textAlign: 'center' }}>
                    <SiJest size={iconSize} color="#C21325" />
                    <p>Jest</p>
                </div>

                {/* Husky (Workflow) */}
                <div style={{ textAlign: 'center' }}>
                    <SiVercel size={iconSize} color={iconColor} />
                    <p>Husky</p>
                </div>

                {/* npm */}
                <div style={{ textAlign: 'center' }}>
                    <SiNpm size={iconSize} color="#CB3837" />
                    <p>npm / Yarn</p>
                </div>

                {/* GitHub */}
                <div style={{ textAlign: 'center' }}>
                    <SiGithub size={iconSize} color={iconColor} />
                    <p>GitHub</p>
                </div>

                {/* Ubuntu */}
                <div style={{ textAlign: 'center' }}>
                    <SiUbuntu size={iconSize} color="#E95420" />
                    <p>Ubuntu / Linux</p>
                </div>

                {/* VS Code */}
                <div style={{ textAlign: 'center' }}>
                    <VscVscode size={iconSize} color="#007ACC" />
                    <p>VS Code</p>
                </div>

                {/* ==================================== */}
                {/* 6. PRINCIPLES */}
                {/* ==================================== */}

                {/* SOLID Principles */}
                <div style={{ textAlign: 'center' }}>
                    <FaLightbulb size={iconSize} color="#F7931E" />
                    <p>SOLID</p>
                </div>

                {/* DRY (Don't Repeat Yourself) */}
                <div style={{ textAlign: 'center' }}>
                    <FaRecycle size={iconSize} color="#008000" />
                    <p>DRY</p>
                </div>

                {/* KISS (Keep It Simple, Stupid) */}
                <div style={{ textAlign: 'center' }}>
                    <FaMagic size={iconSize} color="#9C27B0" />
                    <p>KISS</p>
                </div>
                
                {/* MVC (Model-View-Controller) */}
                <div style={{ textAlign: 'center' }}>
                    <FaSitemap size={iconSize} color="#FFD700" />
                    <p>MVC</p>
                </div>

                {/* ==================================== */}
                {/* 7. UTILITIES / DESIGN / OFFICE */}
                {/* ==================================== */}

                {/* Figma (Дизайн) */}
                <div style={{ textAlign: 'center' }}>
                    <SiFigma size={iconSize} color="#F24E1E" />
                    <p>Figma</p>
                </div>
                
                {/* Markdown */}
                <div style={{ textAlign: 'center' }}>
                    <SiMarkdown size={iconSize} color={iconColor} />
                    <p>Markdown</p>
                </div>

                {/* JSON */}
                <div style={{ textAlign: 'center' }}>
                    <SiJson size={iconSize} color={iconColor} />
                    <p>JSON</p>
                </div>

                {/* XML */}
                <div style={{ textAlign: 'center' }}>
                    <SiXml size={iconSize} color="#FF6600" />
                    <p>XML</p>
                </div>

                {/* Paint.NET */}
                <div style={{ textAlign: 'center' }}>
                    <FcPicture size={iconSize} color="#2173B3" />
                    <p>Paint.NET</p>
                </div>

                {/* Paint (MS Paint) */}
                <div style={{ textAlign: 'center' }}>
                    <FaPaintBrush size={iconSize} color="#0078D4" /> 
                    <p>Paint</p>
                </div>

                {/* Microsoft Office */}
                <div style={{ textAlign: 'center' }}>
                    <FaFileWord size={iconSize} color="#D83D00" />
                    <p>MS Office</p>
                </div>

                {/* LibreOffice */}
                <div style={{ textAlign: 'center' }}>
                    <SiLibreoffice size={iconSize} color="#18A303" />
                    <p>LibreOffice</p>
                </div>
                
            </div>
        </section>
    );
};

export default Skills;